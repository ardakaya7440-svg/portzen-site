"use client"

/**
 * Nimbus UI · Liquid Checkout — "Tidepool"
 * A checkout made of the same water as Waterline (Nimbus 01). The card is a 3D slab of
 * glass with water inside: it tilts with the cursor, the water stays level and sloshes,
 * and it flips to the back for the CVC. One drop follows the field you're typing in,
 * flows into the Pay button, fills it while the payment processes and gathers into a
 * round drop with a check. On narrow screens it becomes an Apple-Wallet-style stack.
 * Real card formatting, brand detection, Luhn and expiry checks, browser autofill and an
 * async onPay hook. No dependencies besides React. Water is a tiny WebGL shader with CSS
 * fallbacks; respects reduced motion.
 * by guglielmogiannattasio.it
 */

import * as React from "react"

/* ===================== the water card ===================== */

export type NimbusCardTheme = "sky" | "glass" | "deep"

export const CARD_THEMES: Record<NimbusCardTheme, { a: number[]; b: number[]; w: number[]; fg: string; soft: string; back: string }> = {
  sky: { a: [0.2, 0.62, 1], b: [0.0, 0.3, 0.82], w: [0.5, 0.92, 1], fg: "#FFFFFF", soft: "rgba(255,255,255,.72)", back: "linear-gradient(160deg,#2E9BFF,#0050CC)" },
  glass: { a: [0.93, 0.97, 1], b: [0.72, 0.87, 0.99], w: [0.2, 0.74, 1], fg: "#0B132B", soft: "rgba(11,19,43,.62)", back: "linear-gradient(160deg,#EEF7FF,#B9DCF8)" },
  deep: { a: [0.09, 0.15, 0.32], b: [0.02, 0.04, 0.12], w: [0.0, 0.6, 1], fg: "#F1F7FF", soft: "rgba(241,247,255,.66)", back: "linear-gradient(160deg,#16244A,#050A1C)" },
}

const CARD_VERT = `attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}`
const CARD_FRAG = `precision highp float;
uniform vec2 uRes;uniform float uDpr;uniform float uTime;uniform vec2 uTilt;uniform float uLevel;uniform float uSlope;uniform float uWave;
uniform vec3 uA;uniform vec3 uB;uniform vec3 uW;uniform float uR;uniform float uBub;uniform float uOk;uniform vec4 uRip[4];
float sdRB(vec2 p,vec2 b,float r){vec2 q=abs(p)-b+r;return length(max(q,0.))+min(max(q.x,q.y),0.)-r;}
float caus(vec2 p,float t){vec2 q=p;float c=0.;for(int i=0;i<3;i++){q+=vec2(sin(q.y*1.1+t),cos(q.x*1.3-t*.7))*.6;c+=1./(1.+16.*abs(sin(q.x)*sin(q.y)));}return c/3.;}
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float surfY(float x){
 float rip=0.;for(int i=0;i<4;i++){vec4 R=uRip[i];if(R.w>0.){float dx=abs(x-R.x)-R.z*240.;rip+=R.w*exp(-R.z*1.8)*sin(dx*.13)*exp(-dx*dx/700.);}}
 return uRes.y*(1.-uLevel)+uSlope*(x-uRes.x*.5)+uWave*sin(x*.045+uTime*2.6)+(.9+uWave*.25)*sin(x*.11-uTime*1.7)+rip*4.;}
void main(){
 vec2 p=vec2(gl_FragCoord.x,uRes.y*uDpr-gl_FragCoord.y)/uDpr;
 vec2 c=uRes*.5;float d=sdRB(p-c,c-.5,uR);float m=smoothstep(.8,-.8,d);
 if(m<=0.){gl_FragColor=vec4(0.);return;}
 vec2 uv=p/uRes;
 vec3 col=mix(uA,uB,clamp(uv.y*.75+uv.x*.4,0.,1.));
 vec2 lp=vec2(.22-uTilt.x*.3,.15-uTilt.y*.3);vec2 q=(uv-lp)*vec2(1.5,2.3);
 col+=.16*exp(-dot(q,q)*2.5);
 float s=surfY(p.x);
 float sd=p.y-s;
 float under=smoothstep(-.8,.8,sd);
 float depth=clamp(sd/uRes.y,0.,1.);
 vec2 n=vec2(surfY(p.x+1.)-s,1.);
 vec3 wc=mix(uW,uW*vec3(.35,.6,.85),depth*1.3);
 float cs=caus(p*.042+vec2(uSlope*3.,uTime*.05),uTime*.9);
 wc+=vec3(.8,.96,1.)*smoothstep(.55,1.,cs)*.38*(1.-depth*.7);
 float bub=0.;
 for(int i=0;i<7;i++){float fi=float(i);float bx=uRes.x*(.1+.8*hash(vec2(fi,3.1)));float sp=30.+40.*hash(vec2(fi,7.7));
  float by=uRes.y-mod(uTime*sp+hash(vec2(fi,1.3))*uRes.y,uRes.y*1.2);float br=1.2+2.2*hash(vec2(fi,9.1));
  vec2 bp=p-vec2(bx+sin(uTime*2.+fi)*3.,by);float bd=length(bp)-br;
  bub+=(smoothstep(.8,-.8,bd)*.25+smoothstep(.8,0.,abs(bd))*.5)*step(s+br,by);}
 wc+=vec3(1.)*bub*uBub;
 col=mix(col,mix(col,wc,.74),under);
 col+=vec3(1.)*(exp(-pow(sd+1.,2.)/2.)*.75+exp(-pow(sd-3.5,2.)/12.)*.14);
 col=mix(col,col+vec3(-.02,.06,.03),uOk);
 float ang=dot(uv-.5,normalize(vec2(1.,.55)))+uTilt.x*.32-uTilt.y*.22;
 vec3 irid=.5+.5*cos(6.2831*(vec3(0.,.33,.67)+ang*1.7+uTime*.03));
 float sheen=exp(-pow((ang-.06)/.07,2.))*.2+exp(-pow((ang+.3)/.025,2.))*.1;
 col+=mix(vec3(1.),irid,.5)*sheen;
 float rim=smoothstep(-7.,0.,d);
 col=mix(col,mix(vec3(1.),irid,.65),rim*.16);
 col+=smoothstep(-1.6,0.,d)*.35*(.35+.65*(1.-uv.y));
 col+=(hash(p+fract(uTime))-.5)*.014;
 gl_FragColor=vec4(col*m,m);
}`

type CardGL = { gl: WebGLRenderingContext; u: Record<string, WebGLUniformLocation | null> }

function initCardGL(canvas: HTMLCanvasElement): CardGL | null {
  const gl = canvas.getContext("webgl", { premultipliedAlpha: true, alpha: true, antialias: false }) as WebGLRenderingContext | null
  if (!gl) return null
  const sh = (t: number, src: string) => {
    const s = gl.createShader(t)
    if (!s) return null
    gl.shaderSource(s, src)
    gl.compileShader(s)
    return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null
  }
  const vs = sh(gl.VERTEX_SHADER, CARD_VERT), fs = sh(gl.FRAGMENT_SHADER, CARD_FRAG), p = gl.createProgram()
  if (!vs || !fs || !p) return null
  gl.attachShader(p, vs); gl.attachShader(p, fs); gl.linkProgram(p)
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) return null
  gl.useProgram(p)
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
  const loc = gl.getAttribLocation(p, "a")
  gl.enableVertexAttribArray(loc)
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)
  const u: Record<string, WebGLUniformLocation | null> = {}
  for (const n of ["uRes", "uDpr", "uTime", "uTilt", "uLevel", "uSlope", "uWave", "uA", "uB", "uW", "uR", "uBub", "uOk", "uRip"]) u[n] = gl.getUniformLocation(p, n)
  return { gl, u }
}

export type WaterCardHandle = { splash: (x?: number, amp?: number) => void }

export type WaterCardProps = {
  theme: NimbusCardTheme
  number: string
  name: string
  expiry: string
  cvc: string
  brand: string
  flipped?: boolean
  /** 0..1 water level */
  level?: number
  bubbles?: boolean
  success?: boolean
  interactive?: boolean
  /** live = animate; false = draw a still frame (for cards sitting in a stack) */
  live?: boolean
  width?: number
  className?: string
  style?: React.CSSProperties
}

const Chip = () => (
  <svg viewBox="0 0 40 30" width="100%" height="100%" aria-hidden="true">
    <defs>
      <linearGradient id="nc-chip" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#F6E7B0" /><stop offset=".5" stopColor="#D9B865" /><stop offset="1" stopColor="#F3DE98" /></linearGradient>
    </defs>
    <rect x=".5" y=".5" width="39" height="29" rx="6" fill="url(#nc-chip)" stroke="rgba(120,90,20,.35)" />
    <path d="M14 .5v29M26 .5v29M.5 10h13.5M26 10h13.5M.5 20h13.5M26 20h13.5M14 15h12" stroke="rgba(120,90,20,.38)" fill="none" />
  </svg>
)

const Contactless = () => (
  <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
    <path d="M7.5 8.5a5 5 0 0 1 0 7M11 6a8.5 8.5 0 0 1 0 12M14.5 3.5a12 12 0 0 1 0 17" />
  </svg>
)

const Cloud = () => (
  <svg viewBox="0 0 28 18" width="100%" height="100%" aria-hidden="true">
    <path d="M7.5 17h13.2a5.3 5.3 0 0 0 .8-10.5A7.2 7.2 0 0 0 7.8 5.4 5.8 5.8 0 0 0 7.5 17Z" fill="currentColor" opacity=".92" />
  </svg>
)

export const WaterCard = React.forwardRef<WaterCardHandle, WaterCardProps>(function WaterCard(
  { theme, number, name, expiry, cvc, brand, flipped = false, level = 0.42, bubbles = false, success = false, interactive = true, live = true, width = 360, className, style },
  ref,
) {
  const T = CARD_THEMES[theme]
  const W = width, H = Math.round(width / 1.586), R = Math.round(width * 0.052)
  const sceneRef = React.useRef<HTMLDivElement>(null)
  const cardRef = React.useRef<HTMLDivElement>(null)
  const shadowRef = React.useRef<HTMLDivElement>(null)
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const props = React.useRef({ flipped, level, bubbles, success, live, T })
  props.current = { flipped, level, bubbles, success, live, T }
  const [gl, setGl] = React.useState(true)
  const st = React.useRef({
    tilt: { x: 0, y: 0, vx: 0, vy: 0 },
    aim: { x: 0, y: 0, on: false },
    flip: { a: 0, v: 0 },
    slope: { s: 0, v: 0 },
    lvl: { l: level, v: 0 },
    ok: 0,
    rips: [] as { x: number; age: number; amp: number }[],
    time: 0,
    last: 0,
    raf: 0,
    visible: true,
    reduce: false,
    glc: null as CardGL | null,
  })

  const draw = React.useCallback(() => {
    const s = st.current
    const P = props.current
    const tx = s.tilt.x, ty = s.tilt.y
    if (cardRef.current) {
      const roll = tx * 2.2
      cardRef.current.style.transform = `rotateX(${(-ty * 13).toFixed(3)}deg) rotateY(${(tx * 17 + s.flip.a).toFixed(3)}deg) rotateZ(${roll.toFixed(3)}deg)`
    }
    if (shadowRef.current) shadowRef.current.style.transform = `translate(${(tx * 14).toFixed(2)}px, ${(18 + ty * 8).toFixed(2)}px) scale(${(0.92 - Math.abs(ty) * 0.04).toFixed(3)})`
    const g = s.glc
    if (!g) return
    const { gl: c, u } = g
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    c.viewport(0, 0, c.drawingBufferWidth, c.drawingBufferHeight)
    c.uniform2f(u.uRes, W, H)
    c.uniform1f(u.uDpr, dpr)
    c.uniform1f(u.uTime, s.time)
    c.uniform2f(u.uTilt, tx, ty)
    c.uniform1f(u.uLevel, s.lvl.l)
    c.uniform1f(u.uSlope, s.slope.s)
    c.uniform1f(u.uWave, s.reduce ? 0 : Math.min(1.2 + Math.abs(s.slope.v) * 6 + Math.abs(s.lvl.v) * 30, 6))
    c.uniform3fv(u.uA, P.T.a)
    c.uniform3fv(u.uB, P.T.b)
    c.uniform3fv(u.uW, P.T.w)
    c.uniform1f(u.uR, R)
    c.uniform1f(u.uBub, P.bubbles && !s.reduce ? 1 : 0)
    c.uniform1f(u.uOk, s.ok)
    const rips = new Float32Array(16)
    s.rips.slice(-4).forEach((r, i) => rips.set([r.x, 0, r.age, r.amp], i * 4))
    c.uniform4fv(u.uRip, rips)
    c.clearColor(0, 0, 0, 0)
    c.clear(c.COLOR_BUFFER_BIT)
    c.drawArrays(c.TRIANGLES, 0, 3)
  }, [W, H, R])

  const step = React.useCallback((dt: number) => {
    const s = st.current
    const P = props.current
    s.time += dt
    // tilt: follow the pointer, or float gently when idle
    const ax = s.aim.on ? s.aim.x : s.reduce ? 0 : Math.sin(s.time * 0.7) * 0.18
    const ay = s.aim.on ? s.aim.y : s.reduce ? 0 : Math.sin(s.time * 0.53 + 1) * 0.12
    if (s.reduce) { s.tilt.x = ax; s.tilt.y = ay } else {
      s.tilt.vx += (60 * (ax - s.tilt.x) - 11 * s.tilt.vx) * dt
      s.tilt.vy += (60 * (ay - s.tilt.y) - 11 * s.tilt.vy) * dt
      s.tilt.x += s.tilt.vx * dt
      s.tilt.y += s.tilt.vy * dt
    }
    // flip
    const fa = P.flipped ? 180 : 0
    if (s.reduce) s.flip.a = fa
    else {
      const before = s.flip.a
      s.flip.v += (150 * (fa - s.flip.a) - 17 * s.flip.v) * dt
      s.flip.a += s.flip.v * dt
      if (Math.abs(fa - before) > 1) s.slope.v += (s.flip.v > 0 ? 1 : -1) * dt * 1.4 // flipping throws the water
    }
    // water: stays level in the world, so it slopes against the card's roll and sloshes back
    const slopeT = -s.tilt.x * 0.075
    if (s.reduce) s.slope.s = slopeT
    else {
      s.slope.v += (26 * (slopeT - s.slope.s) - 1.6 * s.slope.v) * dt
      s.slope.s += s.slope.v * dt
    }
    s.slope.s = Math.max(-0.35, Math.min(0.35, s.slope.s))
    if (s.reduce) s.lvl.l = P.level
    else {
      s.lvl.v += (14 * (P.level - s.lvl.l) - 5 * s.lvl.v) * dt
      s.lvl.l += s.lvl.v * dt
    }
    s.ok += ((P.success ? 1 : 0) - s.ok) * Math.min(1, dt * 4)
    s.rips.forEach((r) => (r.age += dt))
    s.rips = s.rips.filter((r) => r.age < 2)
  }, [])

  const loop = React.useCallback(() => {
    const s = st.current
    if (s.raf) return
    s.last = performance.now()
    const tick = (now: number) => {
      const dt = Math.min((now - s.last) / 1000, 1 / 30)
      s.last = now
      step(dt)
      draw()
      const settling = Math.abs(s.flip.v) > 0.5 || Math.abs(s.lvl.v) > 0.002 || s.rips.length > 0 || s.aim.on
      if (s.visible && props.current.live && (!s.reduce || settling)) s.raf = requestAnimationFrame(tick)
      else s.raf = 0
    }
    s.raf = requestAnimationFrame(tick)
  }, [draw, step])

  React.useImperativeHandle(ref, () => ({
    splash: (x, amp = 1) => {
      const s = st.current
      if (s.reduce) return
      s.rips.push({ x: x ?? W / 2, age: 0, amp })
      s.lvl.v += 0.25 * amp
      loop()
    },
  }), [W, loop])

  React.useEffect(() => {
    const s = st.current
    s.reduce = !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    const cv = canvasRef.current
    s.glc = cv ? initCardGL(cv) : null
    if (!s.glc) setGl(false)
    const lost = (e: Event) => { e.preventDefault(); s.glc = null; setGl(false) }
    cv?.addEventListener("webglcontextlost", lost)
    const io = new IntersectionObserver(([e]) => { s.visible = e.isIntersecting; if (s.visible) loop() })
    if (sceneRef.current) io.observe(sceneRef.current)
    return () => { cv?.removeEventListener("webglcontextlost", lost); io.disconnect(); cancelAnimationFrame(s.raf); s.raf = 0 }
  }, [loop])

  React.useLayoutEffect(() => {
    const cv = canvasRef.current
    if (cv) {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      cv.width = Math.round(W * dpr)
      cv.height = Math.round(H * dpr)
      cv.style.width = `${W}px`
      cv.style.height = `${H}px`
    }
    draw()
    loop()
  }, [W, H, draw, loop])

  React.useEffect(() => { loop() }, [flipped, level, bubbles, success, live, theme, loop])

  const onMove = (e: React.PointerEvent) => {
    if (!interactive || e.pointerType === "touch") return
    const r = sceneRef.current?.getBoundingClientRect()
    if (!r) return
    const s = st.current
    s.aim.x = Math.max(-1, Math.min(1, ((e.clientX - r.left) / r.width - 0.5) * 2))
    s.aim.y = Math.max(-1, Math.min(1, ((e.clientY - r.top) / r.height - 0.5) * 2))
    s.aim.on = true
    loop()
  }

  return (
    <div
      ref={sceneRef}
      className={["nc-scene", className].filter(Boolean).join(" ")}
      data-theme={theme}
      data-gl={gl ? "on" : "off"}
      style={{ width: W, height: H, fontSize: W * 0.042, ["--nc-fg" as string]: T.fg, ["--nc-soft" as string]: T.soft, ["--nc-back" as string]: T.back, ["--nc-r" as string]: `${R}px`, ...style }}
      onPointerMove={onMove}
      onPointerLeave={() => { st.current.aim.on = false; loop() }}
      onPointerDown={(e) => {
        const r = sceneRef.current?.getBoundingClientRect()
        if (r && interactive) { st.current.rips.push({ x: e.clientX - r.left, age: 0, amp: 0.8 }); loop() }
      }}
    >
      <div className="nc-shadow" ref={shadowRef} aria-hidden="true" />
      <div className="nc-card" ref={cardRef}>
        <div className="nc-edge" aria-hidden="true" />
        <div className="nc-face nc-front">
          <canvas className="nc-water" ref={canvasRef} aria-hidden="true" />
          <div className="nc-fallback" aria-hidden="true" style={{ background: `linear-gradient(160deg, rgb(${T.a.map((v) => Math.round(v * 255)).join(",")}), rgb(${T.b.map((v) => Math.round(v * 255)).join(",")}))` }}>
            <span style={{ height: `${Math.round(level * 100)}%`, background: `rgba(${T.w.map((v) => Math.round(v * 255)).join(",")},.55)` }} />
          </div>
          <div className="nc-ui">
            <div className="nc-top">
              <span className="nc-logo"><span className="nc-cloud"><Cloud /></span>demo</span>
              <span className="nc-cl"><Contactless /></span>
            </div>
            <span className="nc-chip"><Chip /></span>
            <div className="nc-num">{number}</div>
            <div className="nc-bottom">
              <div className="nc-field"><span className="nc-lbl">Kart sahibi</span><span className="nc-val nc-name">{name}</span></div>
              <div className="nc-field"><span className="nc-lbl">Son kullanma</span><span className="nc-val">{expiry}</span></div>
              <span className="nc-brand">{brand}</span>
            </div>
          </div>
        </div>
        <div className="nc-face nc-back" aria-hidden="true">
          <div className="nc-stripe" />
          <div className="nc-sigrow"><div className="nc-sig" /><div className="nc-cvc">{cvc}</div></div>
          <p className="nc-fine">Örnek kart · gerçek bir ödeme kartı değildir</p>
        </div>
      </div>
    </div>
  )
})

export const CARD_CSS = `
.nc-scene{position:relative;perspective:1100px;flex:none;-webkit-tap-highlight-color:transparent}
.nc-shadow{position:absolute;left:8%;right:8%;bottom:-6%;height:30%;border-radius:50%;background:radial-gradient(closest-side,rgba(0,40,100,.42),rgba(0,40,100,0));filter:blur(14px);z-index:0;pointer-events:none}
.nc-scene[data-theme="deep"] .nc-shadow{background:radial-gradient(closest-side,rgba(0,10,40,.6),rgba(0,10,40,0))}
.nc-card{position:relative;width:100%;height:100%;transform-style:preserve-3d;will-change:transform;z-index:1}
.nc-face{position:absolute;inset:0;border-radius:var(--nc-r);overflow:hidden;-webkit-backface-visibility:hidden;backface-visibility:hidden;color:var(--nc-fg)}
.nc-front{box-shadow:inset 0 0 0 1px rgba(255,255,255,.28)}
.nc-edge{position:absolute;inset:0;border-radius:var(--nc-r);transform:translateZ(-2.5px);background:rgba(160,200,235,.9);box-shadow:0 0 0 .6px rgba(255,255,255,.6)}
.nc-water{position:absolute;inset:0;display:block}
.nc-fallback{display:none;position:absolute;inset:0}
.nc-fallback>span{position:absolute;left:0;right:0;bottom:0;transition:height .6s ease}
.nc-scene[data-gl="off"] .nc-water{display:none}
.nc-scene[data-gl="off"] .nc-fallback{display:block}
.nc-ui{position:absolute;inset:0;padding:7% 7.5% 6.5%;display:flex;flex-direction:column;font-family:ui-sans-serif,-apple-system,"SF Pro Display","Segoe UI",system-ui,sans-serif;-webkit-font-smoothing:antialiased;pointer-events:none}
.nc-top{display:flex;justify-content:space-between;align-items:center}
.nc-logo{display:inline-flex;align-items:center;gap:.35em;font-weight:650;font-size:1.06em;letter-spacing:-.02em}
.nc-cloud{display:inline-block;width:1.55em;height:1em}
.nc-cl{display:inline-block;width:1.4em;height:1.4em;color:var(--nc-soft)}
.nc-chip{display:block;width:13%;aspect-ratio:4/3;margin-top:8%;border-radius:6px;box-shadow:0 1px 2px rgba(0,0,0,.18)}
.nc-num{margin-top:auto;font-size:1.36em;font-weight:520;letter-spacing:.06em;font-variant-numeric:tabular-nums;white-space:nowrap;text-shadow:0 1px 2px rgba(0,30,80,.18)}
.nc-bottom{display:flex;align-items:flex-end;gap:7%;margin-top:5.5%}
.nc-field{display:flex;flex-direction:column;gap:.25em;min-width:0}
.nc-lbl{font-size:.56em;font-weight:600;letter-spacing:.09em;text-transform:uppercase;color:var(--nc-soft)}
.nc-val{font-size:.84em;font-weight:560;letter-spacing:.02em;font-variant-numeric:tabular-nums;white-space:nowrap}
.nc-name{max-width:11em;overflow:hidden;text-overflow:ellipsis;text-transform:uppercase}
.nc-brand{margin-left:auto;font-weight:750;font-style:italic;font-size:1.02em;letter-spacing:.02em;white-space:nowrap}
.nc-back{transform:translateZ(-5px) rotateY(180deg);background:var(--nc-back);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);font-family:ui-sans-serif,-apple-system,"Segoe UI",system-ui,sans-serif}
.nc-stripe{position:absolute;left:0;right:0;top:12%;height:19%;background:linear-gradient(180deg,#0B132B,#1A2A50)}
.nc-sigrow{position:absolute;left:7%;right:7%;top:42%;display:flex;align-items:center;gap:4%}
.nc-sig{flex:1;height:2.3em;border-radius:6px;background:repeating-linear-gradient(-45deg,rgba(255,255,255,.85) 0 6px,rgba(220,235,250,.85) 6px 12px)}
.nc-cvc{min-width:3.6em;height:2.3em;display:grid;place-items:center;border-radius:6px;background:#fff;color:#0B132B;font-weight:650;font-style:italic;letter-spacing:.08em;font-variant-numeric:tabular-nums}
.nc-fine{position:absolute;left:7%;right:7%;bottom:8%;margin:0;font-size:.56em;color:var(--nc-soft);letter-spacing:.02em}
@media (prefers-reduced-motion:reduce){.nc-fallback>span{transition:none}}
`

/* ===================== the checkout ===================== */

export type LiquidWalletCard = {
  id: string
  label: string
  theme: NimbusCardTheme
  brand: string
  last4: string
  holder: string
  expiry: string
}

export type LiquidPayDetails =
  | { method: "card"; number: string; name: string; expiry: string; cvc: string; brand: string }
  | { method: "wallet"; card: LiquidWalletCard }

export type LiquidCheckoutProps = {
  amount?: number
  currency?: string
  locale?: string
  merchant?: string
  /** called on pay; return a promise to keep the water processing until it settles (reject = declined) */
  onPay?: (details: LiquidPayDetails) => Promise<unknown> | unknown
  /** saved cards for the Wallet layout */
  cards?: LiquidWalletCard[]
  /** "auto" = form on wide screens, Wallet on narrow ones */
  layout?: "auto" | "form" | "wallet"
  tone?: "light" | "dark"
  /** ms after success before the checkout is ready again (0 = stay) */
  resetAfter?: number
  sound?: boolean
  /** small line under the button */
  note?: string
  className?: string
  style?: React.CSSProperties
}

const DEFAULT_CARDS: LiquidWalletCard[] = [
  { id: "sky", label: "Mavi Kart", theme: "sky", brand: "DEMO", last4: "0001", holder: "Ayşe Yılmaz", expiry: "09/29" },
  { id: "glass", label: "Cam Kart", theme: "glass", brand: "DEMO", last4: "0002", holder: "Ayşe Yılmaz", expiry: "12/28" },
  { id: "deep", label: "Gece Kartı", theme: "deep", brand: "DEMO", last4: "0003", holder: "Ayşe Yılmaz", expiry: "01/30" },
]

/* ---------- card helpers ---------- */
type Brand = { name: string; theme: NimbusCardTheme; groups: number[]; cvc: number }
function brandOf(digits: string): Brand {
  if (/^3[47]/.test(digits)) return { name: "AMEX", theme: "deep", groups: [4, 6, 5], cvc: 4 }
  if (/^(5[1-5]|2[2-7])/.test(digits)) return { name: "Mastercard", theme: "glass", groups: [4, 4, 4, 4], cvc: 3 }
  if (/^4/.test(digits)) return { name: "VISA", theme: "sky", groups: [4, 4, 4, 4], cvc: 3 }
  return { name: "", theme: "sky", groups: [4, 4, 4, 4], cvc: 3 }
}
const maxLen = (b: Brand) => b.groups.reduce((a, n) => a + n, 0)
function group(digits: string, b: Brand, fill = "") {
  const out: string[] = []
  let i = 0
  for (const n of b.groups) {
    let g = digits.slice(i, i + n)
    if (fill) g = g.padEnd(n, fill)
    if (g) out.push(g)
    i += n
  }
  return out.join(" ")
}
function luhn(d: string) {
  let sum = 0
  for (let i = 0; i < d.length; i++) {
    let n = +d[d.length - 1 - i]
    if (i % 2) { n *= 2; if (n > 9) n -= 9 }
    sum += n
  }
  return d.length > 11 && sum % 10 === 0
}
function expiryOk(v: string) {
  const m = /^(\d{2})\/(\d{2})$/.exec(v)
  if (!m) return false
  const mm = +m[1], yy = 2000 + +m[2]
  if (mm < 1 || mm > 12) return false
  const now = new Date()
  return yy > now.getFullYear() || (yy === now.getFullYear() && mm >= now.getMonth() + 1)
}

/* ---------- the water shader (Waterline engine: drop boxes + colored fill) ---------- */
const PAD = 14
const VERT = `attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}`
const FRAG = `precision highp float;
uniform vec2 uRes;uniform float uDpr;uniform float uTime;uniform vec4 uCard;uniform float uCardR;
uniform vec4 uBox[2];uniform float uBoxR[2];uniform vec4 uSat[4];uniform vec4 uRip[6];uniform vec3 uMouse;uniform vec3 uFront;
uniform float uDark;uniform float uAmb;uniform float uBlue;
float sdRB(vec2 p,vec2 b,float r){vec2 q=abs(p)-b+r;return length(max(q,0.))+min(max(q.x,q.y),0.)-r;}
float smin(float a,float b,float k){float h=clamp(.5+.5*(b-a)/k,0.,1.);return mix(b,a,h)-k*h*(1.-h);}
float dropD(vec2 p){float d=1e4;
 for(int i=0;i<2;i++){vec4 B=uBox[i];if(B.z>.5){vec2 q=p;
  if(i==0){float f=exp(-pow(q.x-uFront.x,2.)/200.);q.x+=f*uFront.y*(sin(q.y*.2+uTime*7.)+.5*sin(q.y*.37-uTime*5.));}
  d=smin(d,sdRB(q-B.xy,B.zw,uBoxR[i]),12.);}}
 for(int i=0;i<4;i++){vec4 S=uSat[i];if(S.z>.5){d=smin(d,length(p-S.xy)-S.z,12.);}}
 return d;}
float cardD(vec2 p){vec2 h=uCard.zw*.5;return sdRB(p-uCard.xy-h,h,uCardR);}
float lens(float d,float w){float t=clamp(-d/w,0.,1.);return sqrt(1.-(1.-t)*(1.-t));}
float waves(vec2 p){float w=0.;
 for(int i=0;i<6;i++){vec4 R=uRip[i];if(R.w>0.){float x=length(p-R.xy)-R.z*240.;w+=R.w*exp(-R.z*1.7)*sin(x*.3)*exp(-x*x/700.);}}
 vec2 m=p-uMouse.xy;w+=uMouse.z*3.6*exp(-dot(m,m)/1400.);
 w+=uAmb*(sin(p.x*.04+p.y*.02+uTime*1.1)*.45+sin(p.x*.11-uTime*.8+p.y*.13)*.25);return w;}
float H(vec2 p){float dc=cardD(p);return lens(dc,18.)*2.4+lens(dropD(p),11.)*7.5+waves(p)*smoothstep(0.,9.,-dc);}
float caus(vec2 p,float t){vec2 q=p;float c=0.;for(int i=0;i<3;i++){q+=vec2(sin(q.y*1.1+t),cos(q.x*1.3-t*.7))*.6;c+=1./(1.+16.*abs(sin(q.x)*sin(q.y)));}return c/3.;}
void main(){
 vec2 p=vec2(gl_FragCoord.x,uRes.y*uDpr-gl_FragCoord.y)/uDpr;
 float dp=cardD(p);if(dp>16.){gl_FragColor=vec4(0.);return;}
 float dd=dropD(p);
 float h0=H(p);vec3 n=normalize(vec3(h0-H(p+vec2(1.,0.)),h0-H(p+vec2(0.,1.)),1.));
 vec3 V=vec3(0.,0.,1.);
 float spec=pow(max(dot(reflect(-normalize(vec3(-.45,-.8,.85)),n),V),0.),70.);
 float spec2=pow(max(dot(reflect(-normalize(vec3(.6,.75,.7)),n),V),0.),22.)*.3;
 float fres=clamp((1.-n.z)*4.,0.,1.);
 vec3 irid=.5+.5*cos(6.2831*(vec3(0.,.33,.67)+fres*.85+p.x*.0028+p.y*.0015+uTime*.035));
 float pm=smoothstep(1.,-1.,dp);float dm=smoothstep(1.,-1.,dd)*smoothstep(1.,-2.,dp);
 float sh=smoothstep(9.,-9.,dropD(p-vec2(0.,5.)))*(1.-dm)*pm*(.11+.07*uDark+.08*uBlue);
 vec3 c=vec3(0.,.14,.36)*sh;float a=sh;
 float pa=clamp(pm*(fres*.5+spec*.9+spec2),0.,1.);
 c=mix(vec3(1.),irid,.5*fres)*pa+c*(1.-pa);a=pa+a*(1.-pa);
 float th=lens(dd,11.);
 float cs=caus((p+n.xy*th*18.)*.085,uTime*.9);
 vec3 tint=mix(vec3(.80,.95,1.),vec3(.55,.82,1.),uDark);
 float rim=dm*(1.-smoothstep(0.,8.,-dd));
 float cres=dm*smoothstep(.12,.55,dot(n.xy,normalize(vec2(.55,.85))))*smoothstep(0.,3.,-dd);
 float body=.5+.5*clamp(-n.y*3.,-1.,1.);
 float da=dm*(.26+.14*body)*(1.-.35*uDark);vec3 dc=mix(tint,vec3(1.),body*.6);
 /* blue water while paying */
 vec3 bw=mix(vec3(.35,.86,1.),vec3(0.,.52,.98),clamp(.5-n.y*2.+th*.3,0.,1.));
 dc=mix(dc,bw,uBlue);da=mix(da,dm*.9,uBlue);
 float la=rim*.22;vec3 lc=mix(vec3(0.,.42,.78),vec3(.1,.55,.95),uDark);dc=lc*la+dc*da*(1.-la);da=la+da*(1.-la);
 la=clamp(cres*.7+smoothstep(.6,1.,cs)*(.28+.25*uBlue)*th*dm,0.,1.);dc=vec3(1.)*la+dc*(1.-la);da=la+da*(1.-la);
 la=clamp(dm*(spec*1.2+spec2*.5),0.,1.);dc=vec3(1.)*la+dc*(1.-la);da=la+da*(1.-la);
 la=dm*smoothstep(-2.,0.,dd)*.4;dc=mix(vec3(1.),irid,.35)*la+dc*(1.-la);da=la+da*(1.-la);
 c=dc+c*(1.-da);a=da+a*(1.-da);
 gl_FragColor=vec4(c,a);
}`

type Box = { x: number; y: number; w: number; h: number; vx: number; vy: number; vw: number; vh: number }
type Target = { x: number; y: number; w: number; h: number; r: number }
type Sat = { x: number; y: number; vx: number; vy: number; r: number; k: number }
type Rip = { x: number; y: number; age: number; amp: number }
type GLC = { gl: WebGLRenderingContext; u: Record<string, WebGLUniformLocation | null> }
const mkBox = (): Box => ({ x: 0, y: 0, w: 0, h: 0, vx: 0, vy: 0, vw: 0, vh: 0 })

function initGL(canvas: HTMLCanvasElement): GLC | null {
  const gl = canvas.getContext("webgl", { premultipliedAlpha: true, alpha: true, antialias: false }) as WebGLRenderingContext | null
  if (!gl) return null
  const sh = (t: number, src: string) => {
    const s = gl.createShader(t)
    if (!s) return null
    gl.shaderSource(s, src)
    gl.compileShader(s)
    return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null
  }
  const vs = sh(gl.VERTEX_SHADER, VERT), fs = sh(gl.FRAGMENT_SHADER, FRAG), p = gl.createProgram()
  if (!vs || !fs || !p) return null
  gl.attachShader(p, vs); gl.attachShader(p, fs); gl.linkProgram(p)
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) return null
  gl.useProgram(p)
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
  const loc = gl.getAttribLocation(p, "a")
  gl.enableVertexAttribArray(loc)
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)
  const u: Record<string, WebGLUniformLocation | null> = {}
  for (const n of ["uRes", "uDpr", "uTime", "uCard", "uCardR", "uBox", "uBoxR", "uSat", "uRip", "uMouse", "uFront", "uDark", "uAmb", "uBlue"]) u[n] = gl.getUniformLocation(p, n)
  return { gl, u }
}

type Phase = "edit" | "processing" | "success" | "error"

/* ---------- the drop that lives on a glass panel ---------- */
function useWater(panelRef: React.RefObject<HTMLElement | null>, canvasRef: React.RefObject<HTMLCanvasElement | null>, getTarget: () => Target | null, tone: "light" | "dark") {
  const st = React.useRef({
    a: mkBox(), b: mkBox(), lead: 0 as 0 | 1, lagUntil: 0, sats: [] as Sat[], rips: [] as Rip[],
    mouse: { x: 0, y: 0, s: 0, on: false }, blue: 0, blueT: 0, moving: false, split: false, ready: false,
    w: 0, h: 0, ch: 0, visible: true, reduce: false, raf: 0, last: 0, time: 0, glc: null as GLC | null,
  })
  const [gl, setGl] = React.useState(true)
  const targetRef = React.useRef(getTarget)
  targetRef.current = getTarget
  const darkRef = React.useRef(0)
  darkRef.current = tone === "dark" ? 1 : 0

  const draw = React.useCallback(() => {
    const s = st.current
    const g = s.glc
    if (!g) return
    const head = s.lead === 0 ? s.a : s.b, tail = s.lead === 0 ? s.b : s.a
    const gap = Math.hypot(head.x - tail.x, head.y - tail.y) - (Math.min(head.w, head.h) + Math.min(tail.w, tail.h))
    const thin = Math.max(0, Math.min(1, (gap + 40) / 60))
    const T = targetRef.current()
    const R0 = T?.r ?? 14
    const shape = (B: Box, k: number) => {
      const w = B.w * (1 - k * thin), h = B.h * (1 - k * 0.4 * thin)
      return { w, h, r: Math.max(0, Math.min(R0 + (Math.min(w, h) - R0) * thin, w, h)) }
    }
    const hs = shape(head, 0.25), ts = shape(tail, 0.55)
    const { gl: c, u } = g
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75)
    c.viewport(0, 0, c.drawingBufferWidth, c.drawingBufferHeight)
    c.uniform2f(u.uRes, s.w + PAD * 2, s.ch)
    c.uniform1f(u.uDpr, dpr)
    c.uniform1f(u.uTime, s.time)
    c.uniform4f(u.uCard, PAD, PAD, s.w, s.h)
    c.uniform1f(u.uCardR, 28)
    const on = (B: { w: number; h: number }) => B.w > 1 && B.h > 1
    c.uniform4fv(u.uBox, new Float32Array([head.x, head.y, on(hs) ? hs.w : 0, hs.h, tail.x, tail.y, on(ts) ? ts.w : 0, ts.h]))
    c.uniform1fv(u.uBoxR, new Float32Array([hs.r, ts.r]))
    const sats = new Float32Array(16)
    s.sats.slice(0, 4).forEach((d, i) => sats.set([d.x, d.y, d.r, 0], i * 4))
    c.uniform4fv(u.uSat, sats)
    const rips = new Float32Array(24)
    s.rips.slice(-6).forEach((p, i) => rips.set([p.x, p.y, p.age, p.amp], i * 4))
    c.uniform4fv(u.uRip, rips)
    c.uniform3f(u.uMouse, s.mouse.x, s.mouse.y, s.mouse.s)
    c.uniform3f(u.uFront, head.x + head.w, s.reduce ? 0 : Math.min(Math.abs(head.vw) * 0.01, 3.5), 0)
    c.uniform1f(u.uDark, darkRef.current)
    c.uniform1f(u.uAmb, s.reduce ? 0 : 1)
    c.uniform1f(u.uBlue, s.blue)
    c.clearColor(0, 0, 0, 0)
    c.clear(c.COLOR_BUFFER_BIT)
    c.drawArrays(c.TRIANGLES, 0, 3)
  }, [])

  const step = React.useCallback((dt: number, now: number) => {
    const s = st.current
    s.time += dt
    const T = targetRef.current()
    let still = true
    s.blue += (s.blueT - s.blue) * Math.min(1, dt * 5)
    if (Math.abs(s.blueT - s.blue) > 0.01) still = false
    if (T) {
      if (!s.ready) { Object.assign(s.a, T); Object.assign(s.b, T); s.ready = true }
      const bodies = [s.a, s.b]
      if (s.reduce) {
        for (const B of bodies) Object.assign(B, { x: T.x, y: T.y, w: T.w, h: T.h, vx: 0, vy: 0, vw: 0, vh: 0 })
        s.sats = []
      } else {
        bodies.forEach((B, i) => {
          const lead = i === s.lead
          const k = lead ? 210 : 60, c = lead ? 25 : 13
          const f = !lead && now < s.lagUntil ? 0.04 : 1
          B.vx += (k * (T.x - B.x) - c * B.vx) * dt * f
          B.vy += (k * (T.y - B.y) - c * B.vy) * dt * f
          B.vw += (k * (T.w - B.w) - c * B.vw) * dt * f
          B.vh += (k * (T.h - B.h) - c * B.vh) * dt * f
          B.x += B.vx * dt; B.y += B.vy * dt; B.w = Math.max(0, B.w + B.vw * dt); B.h = Math.max(0, B.h + B.vh * dt)
          if (Math.abs(T.x - B.x) + Math.abs(T.y - B.y) + Math.abs(T.w - B.w) + Math.abs(T.h - B.h) > 0.6 || Math.abs(B.vx) + Math.abs(B.vy) + Math.abs(B.vw) > 4) still = false
        })
        const head = bodies[s.lead], tail = bodies[1 - s.lead]
        const dist = Math.hypot(head.x - tail.x, head.y - tail.y)
        if (!s.split && s.moving && dist > Math.min(head.w, head.h) + Math.min(tail.w, tail.h) + 6) {
          s.split = true
          ;[0.3, 0.55, 0.8].forEach((t, j) => s.sats.push({
            x: tail.x + (head.x - tail.x) * t + (Math.random() - 0.5) * 20,
            y: tail.y + (head.y - tail.y) * t + (Math.random() - 0.5) * 10,
            vx: (head.vx + tail.vx) * 0.3, vy: (head.vy + tail.vy) * 0.3, r: 7.5 - j * 1.2 + Math.random() * 1.5, k: 60 + Math.random() * 70,
          }))
        }
        s.sats = s.sats.filter((d) => {
          d.vx += (d.k * (head.x - d.x) - 9 * d.vx) * dt
          d.vy += (d.k * (head.y - d.y) - 9 * d.vy) * dt
          d.x += d.vx * dt; d.y += d.vy * dt
          if (Math.abs(head.x - d.x) < head.w * 0.8 && Math.abs(head.y - d.y) < head.h * 0.9) d.r -= dt * 30
          return d.r > 0.6
        })
        if (s.sats.length) still = false
      }
      if (s.moving && still) {
        s.moving = false
        if (!s.reduce) s.rips.push({ x: T.x, y: T.y, age: 0, amp: s.split ? 1 : 0.5 })
      }
    }
    s.rips.forEach((p) => (p.age += dt))
    s.rips = s.rips.filter((p) => p.age < 2.4)
    s.mouse.s += ((s.mouse.on ? 1 : 0) - s.mouse.s) * Math.min(1, dt * 7)
  }, [])

  const loop = React.useCallback(() => {
    const s = st.current
    if (s.raf) return
    s.last = performance.now()
    const tick = (now: number) => {
      const dt = Math.min((now - s.last) / 1000, 1 / 30)
      s.last = now
      step(dt, now)
      draw()
      const busy = s.moving || s.rips.length || s.sats.length || s.mouse.s > 0.01
      if (s.visible && (!s.reduce || busy)) s.raf = requestAnimationFrame(tick)
      else s.raf = 0
    }
    s.raf = requestAnimationFrame(tick)
  }, [draw, step])

  const resize = React.useCallback(() => {
    const el = panelRef.current, cv = canvasRef.current
    if (!el) return
    const s = st.current
    s.w = el.offsetWidth
    s.h = el.offsetHeight
    if (cv) {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75)
      const W = s.w + PAD * 2, Hc = Math.ceil((s.h + PAD * 2) / 96) * 96
      if (Hc !== s.ch || cv.width !== Math.round(W * dpr)) {
        s.ch = Hc
        cv.width = Math.round(W * dpr); cv.height = Math.round(Hc * dpr)
        cv.style.width = `${W}px`; cv.style.height = `${Hc}px`
      }
    }
    loop()
  }, [panelRef, canvasRef, loop])

  React.useEffect(() => {
    const s = st.current
    s.reduce = !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    const cv = canvasRef.current
    s.glc = cv ? initGL(cv) : null
    if (!s.glc) setGl(false)
    const lost = (e: Event) => { e.preventDefault(); s.glc = null; setGl(false) }
    cv?.addEventListener("webglcontextlost", lost)
    const io = new IntersectionObserver(([e]) => { s.visible = e.isIntersecting; if (s.visible) loop() })
    const ro = new ResizeObserver(() => resize())
    if (panelRef.current) { io.observe(panelRef.current); ro.observe(panelRef.current) }
    resize()
    return () => { cv?.removeEventListener("webglcontextlost", lost); io.disconnect(); ro.disconnect(); cancelAnimationFrame(s.raf); s.raf = 0 }
  }, [canvasRef, panelRef, loop, resize])

  /** the target moved somewhere new: stretch over there */
  const flow = React.useCallback((lag = 90) => {
    const s = st.current
    const T = targetRef.current()
    if (T) s.lead = Math.hypot(T.x - s.a.x, T.y - s.a.y) <= Math.hypot(T.x - s.b.x, T.y - s.b.y) ? 0 : 1
    s.lagUntil = performance.now() + lag
    s.moving = true
    s.split = false
    loop()
  }, [loop])
  const ripple = React.useCallback((x: number, y: number, amp: number) => {
    const s = st.current
    if (s.reduce) return
    s.rips.push({ x, y, age: 0, amp })
    loop()
  }, [loop])
  const shake = React.useCallback(() => {
    const s = st.current
    if (s.reduce) return
    const head = s.lead === 0 ? s.a : s.b
    head.vx += 420; head.vw -= 160
    s.moving = true
    loop()
  }, [loop])
  const setBlue = React.useCallback((v: number) => { st.current.blueT = v; loop() }, [loop])
  const pointer = React.useCallback((x: number, y: number, on: boolean) => {
    const s = st.current
    s.mouse.x = x; s.mouse.y = y; s.mouse.on = on
    loop()
  }, [loop])

  return { gl, flow, ripple, shake, setBlue, pointer, loop }
}

/* ---------- icons ---------- */
const Lock = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2.5" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
)
const Check = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path className="lc-check" d="m5.5 12.5 4.2 4.2L18.5 7.8" /></svg>
)

/* ---------- styles ---------- */
const LC_CSS = `
.nimbus-pay{--p-fg:#0B132B;--p-soft:rgba(11,19,43,.6);--p-faint:rgba(11,19,43,.42);--p-line:rgba(11,19,43,.1);--p-tint:rgba(255,255,255,.18);--p-rim:rgba(255,255,255,.72);--p-err:#E5484D;
  position:relative;box-sizing:border-box;display:flex;align-items:center;justify-content:center;gap:56px;width:100%;
  font-family:ui-sans-serif,-apple-system,"SF Pro Text","Segoe UI",system-ui,sans-serif;-webkit-font-smoothing:antialiased;color:var(--p-fg);-webkit-tap-highlight-color:transparent}
.nimbus-pay[data-tone="dark"]{--p-fg:#F1F7FF;--p-soft:rgba(241,247,255,.66);--p-faint:rgba(241,247,255,.45);--p-line:rgba(241,247,255,.12);--p-tint:rgba(10,18,40,.3);--p-rim:rgba(255,255,255,.3)}
.nimbus-pay *{box-sizing:border-box}
.lc-stage{position:relative;display:flex;flex-direction:column;align-items:center;gap:22px}
.lc-panel{position:relative;isolation:isolate;width:380px;max-width:100%;padding:26px 24px 22px;border-radius:28px}
.lc-glass{position:absolute;inset:0;border-radius:inherit;z-index:-2;background:var(--p-tint);
  -webkit-backdrop-filter:blur(14px) saturate(1.2) brightness(1.06);backdrop-filter:blur(14px) saturate(1.2) brightness(1.06);
  box-shadow:inset 0 1px 1px var(--p-rim),inset 0 0 0 1px rgba(255,255,255,.2),0 22px 50px -24px rgba(0,40,90,.55),0 2px 6px rgba(0,40,90,.08)}
.nimbus-pay[data-tone="dark"] .lc-glass{box-shadow:inset 0 1px 1px var(--p-rim),inset 0 0 0 1px rgba(255,255,255,.1),0 22px 50px -24px rgba(0,0,0,.7)}
.lc-water{position:absolute;left:${-PAD}px;top:${-PAD}px;z-index:-1;pointer-events:none}
.nimbus-pay[data-gl="off"] .lc-water{display:none}
.lc-head{display:flex;align-items:flex-end;justify-content:space-between;gap:12px;margin-bottom:18px}
.lc-merchant{display:flex;flex-direction:column;gap:4px;min-width:0}
.lc-kicker{font-size:11px;font-weight:650;letter-spacing:.09em;text-transform:uppercase;color:var(--p-faint)}
.lc-mname{font-size:15px;font-weight:600;letter-spacing:-.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.lc-amount{font-size:30px;font-weight:650;letter-spacing:-.035em;font-variant-numeric:tabular-nums;line-height:1}
.lc-form{display:grid;grid-template-columns:1fr 1fr;gap:12px 12px}
.lc-f{display:flex;flex-direction:column;gap:6px;min-width:0}
.lc-f.lc-wide{grid-column:1/-1}
.lc-l{font-size:12px;font-weight:600;color:var(--p-soft);letter-spacing:.01em}
.lc-box{position:relative;display:flex;align-items:center;height:46px;border-radius:14px;
  box-shadow:inset 0 0 0 1px var(--p-line),inset 0 1px 2px rgba(0,40,90,.06);background:rgba(255,255,255,.12);transition:box-shadow .25s}
.nimbus-pay[data-tone="dark"] .lc-box{background:rgba(255,255,255,.04)}
.lc-box[data-invalid="true"]{box-shadow:inset 0 0 0 1.5px var(--p-err)}
.lc-in{all:unset;box-sizing:border-box;width:100%;height:100%;padding:0 14px;font-size:15px;font-weight:520;letter-spacing:.01em;font-variant-numeric:tabular-nums;color:var(--p-fg);caret-color:#00A2FF}
.lc-in::placeholder{color:var(--p-faint);opacity:1}
.lc-tag{position:absolute;right:12px;font-size:11px;font-weight:750;font-style:italic;letter-spacing:.02em;color:var(--p-soft);pointer-events:none;transition:opacity .25s,transform .35s cubic-bezier(.3,1.6,.5,1)}
.lc-tag[data-on="false"]{opacity:0;transform:scale(.6)}
.lc-err{min-height:16px;margin-top:2px;font-size:12px;color:var(--p-err)}
.lc-pay{position:relative;all:unset;box-sizing:border-box;display:flex;align-items:center;justify-content:center;gap:8px;width:100%;height:52px;margin-top:4px;border-radius:999px;cursor:pointer;
  font-size:16px;font-weight:620;letter-spacing:-.01em;color:var(--p-fg);background-color:rgba(255,255,255,.2);
  box-shadow:inset 0 1px 1px rgba(255,255,255,.9),inset 0 0 0 1px rgba(255,255,255,.5),inset 0 -2px 6px rgba(0,162,255,.14),0 8px 20px -10px rgba(0,70,140,.45);transition:color .35s}
.nimbus-pay[data-tone="dark"] .lc-pay{background-color:rgba(255,255,255,.07);box-shadow:inset 0 1px 1px rgba(255,255,255,.35),inset 0 0 0 1px rgba(255,255,255,.14),0 8px 20px -10px rgba(0,0,0,.6)}
.lc-pay:focus-visible{outline:2px solid #00A2FF;outline-offset:3px}
.lc-pay{transition:color .35s,background-color .45s,box-shadow .45s}
.lc-pay[data-phase="processing"],.lc-pay[data-phase="success"]{color:#fff;cursor:default}
.nimbus-pay .lc-pay[data-phase="success"]{background-color:transparent;box-shadow:none}
.lc-foot[data-ok="true"]{color:var(--p-fg);font-weight:600}
.lc-ok-ico{display:inline-grid;place-items:center;width:16px;height:16px;border-radius:50%;background:#18B26B;color:#fff}
.lc-pay-label{display:inline-flex;align-items:center;gap:8px;transition:opacity .25s,transform .35s}
.lc-pay[data-phase="success"] .lc-pay-label{gap:6px}
.lc-check{stroke-dasharray:24;stroke-dashoffset:24;animation:lcDraw .5s .25s cubic-bezier(.3,0,.2,1) forwards}
@keyframes lcDraw{to{stroke-dashoffset:0}}
.lc-dots{display:inline-flex;gap:3px}.lc-dots i{width:4px;height:4px;border-radius:50%;background:currentColor;animation:lcDot 1s infinite}
.lc-dots i:nth-child(2){animation-delay:.15s}.lc-dots i:nth-child(3){animation-delay:.3s}
@keyframes lcDot{0%,100%{opacity:.35;transform:translateY(0)}40%{opacity:1;transform:translateY(-3px)}}
.lc-foot{display:flex;align-items:center;justify-content:center;gap:6px;margin-top:12px;font-size:12px;color:var(--p-faint)}
.lc-status{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
/* wallet */
.nimbus-pay[data-layout="wallet"]{flex-direction:column;gap:22px}
.lc-stack{position:relative;width:var(--lc-cw);margin:0 auto}
.lc-slot{all:unset;position:absolute;left:0;top:0;cursor:pointer;border-radius:16px;transition:transform .6s cubic-bezier(.25,1.25,.35,1),filter .4s}
.lc-slot:focus-visible{outline:2px solid #00A2FF;outline-offset:4px}
.lc-slot[aria-checked="false"]{filter:saturate(.9) brightness(.97)}
.lc-rows{display:flex;flex-direction:column;margin-bottom:6px}
.lc-row{position:relative;display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:52px;padding:0 14px;border-radius:16px;font-size:14px}
.lc-row+.lc-row::before{content:"";position:absolute;left:14px;right:14px;top:0;height:1px;background:var(--p-line)}
.lc-row-k{color:var(--p-soft);font-weight:550}
.lc-row-v{font-weight:600;text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.lc-mini{display:inline-block;width:26px;height:17px;border-radius:4px;margin-right:8px;vertical-align:-3px;box-shadow:inset 0 0 0 1px rgba(255,255,255,.4)}
@media (prefers-reduced-motion:reduce){.lc-slot,.lc-tag,.lc-pay,.lc-pay-label{transition:none}.lc-check{animation:none;stroke-dashoffset:0}.lc-dots i{animation:none}}
` + CARD_CSS

/* ---------- component ---------- */
export function LiquidCheckout({
  amount = 42,
  currency = "TRY",
  locale = "tr-TR",
  merchant = "Örnek Mağaza",
  onPay,
  cards = DEFAULT_CARDS,
  layout = "auto",
  tone = "light",
  resetAfter = 3200,
  sound = false,
  note,
  className,
  style,
}: LiquidCheckoutProps) {
  const rootRef = React.useRef<HTMLDivElement>(null)
  const panelRef = React.useRef<HTMLDivElement>(null)
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const payRef = React.useRef<HTMLButtonElement>(null)
  const cardRef = React.useRef<WaterCardHandle>(null)
  const boxRefs = React.useRef<Record<string, HTMLDivElement | null>>({})
  const inputRefs = React.useRef<Record<string, HTMLInputElement | null>>({})
  const rowRef = React.useRef<HTMLDivElement>(null)
  const audio = React.useRef<AudioContext | null>(null)
  const uid = React.useId().replace(/:/g, "")

  const [width, setWidth] = React.useState(900)
  const mode: "form" | "wallet" = layout === "auto" ? (width < 720 ? "wallet" : "form") : layout
  const [num, setNum] = React.useState("")
  const [name, setName] = React.useState("")
  const [exp, setExp] = React.useState("")
  const [cvc, setCvc] = React.useState("")
  const [focus, setFocus] = React.useState<string>("number")
  const [phase, setPhase] = React.useState<Phase>("edit")
  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [declined, setDeclined] = React.useState("")
  const [order, setOrder] = React.useState(() => cards.map((c) => c.id))
  const [cardFlipped, setFlipped] = React.useState(false)
  const progRef = React.useRef({ p: 0, raf: 0 })
  const [, force] = React.useReducer((n: number) => n + 1, 0)

  const brand = brandOf(num)
  const selected = cards.find((c) => c.id === order[0]) ?? cards[0]
  const money = React.useMemo(() => {
    try { return new Intl.NumberFormat(locale, { style: "currency", currency }).format(amount) } catch { return `${amount.toFixed(2)} ${currency}` }
  }, [amount, currency, locale])

  /* where the drop should be */
  const getTarget = React.useCallback((): Target | null => {
    const panel = panelRef.current
    if (!panel) return null
    const pr = panel.getBoundingClientRect()
    const rel = (el: Element | null, r: number | "pill", grow = 0): Target | null => {
      if (!el) return null
      const b = el.getBoundingClientRect()
      const h = b.height / 2 + grow
      return { x: PAD + b.left - pr.left + b.width / 2, y: PAD + b.top - pr.top + b.height / 2, w: b.width / 2 + grow, h, r: r === "pill" ? h : r }
    }
    if (phase === "processing" || phase === "success") {
      const btn = payRef.current
      if (!btn) return null
      const b = btn.getBoundingClientRect()
      const hh = b.height / 2
      if (phase === "success") {
        const rr = hh * 0.92 // the water gathers into one round drop
        return { x: PAD + b.left - pr.left + b.width / 2, y: PAD + b.top - pr.top + hh, w: rr, h: rr, r: rr }
      }
      const p = progRef.current.p
      const w = Math.max(hh, (b.width / 2) * p)
      return { x: PAD + b.left - pr.left + w, y: PAD + b.top - pr.top + hh, w, h: hh, r: hh }
    }
    if (mode === "wallet") return rel(rowRef.current, 16)
    return rel(boxRefs.current[focus] ?? boxRefs.current.number ?? null, 14, 2)
  }, [phase, mode, focus])

  const water = useWater(panelRef, canvasRef, getTarget, tone)

  /* layout width */
  React.useLayoutEffect(() => {
    const el = rootRef.current
    if (!el) return
    const ro = new ResizeObserver(([e]) => setWidth(e.contentRect.width))
    ro.observe(el)
    setWidth(el.getBoundingClientRect().width)
    return () => ro.disconnect()
  }, [])

  /* the drop follows focus / phase */
  const prevKey = React.useRef("")
  React.useEffect(() => {
    const key = `${mode}:${phase}:${focus}:${order[0]}`
    if (prevKey.current && prevKey.current !== key) water.flow(phase === "processing" ? 140 : 90)
    prevKey.current = key
  }, [mode, phase, focus, order, water])
  React.useEffect(() => { water.loop() }, [num, name, exp, cvc, errors, declined, water])

  const plip = (f0: number, f1: number) => {
    if (!sound) return
    try {
      const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      const ctx = (audio.current ||= new AC())
      const t = ctx.currentTime, o = ctx.createOscillator(), g = ctx.createGain()
      o.type = "sine"
      o.frequency.setValueAtTime(f0, t)
      o.frequency.exponentialRampToValueAtTime(f1, t + 0.08)
      g.gain.setValueAtTime(0.0001, t)
      g.gain.exponentialRampToValueAtTime(0.14, t + 0.008)
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.18)
      o.connect(g).connect(ctx.destination)
      o.start(t); o.stop(t + 0.2)
    } catch { /* optional */ }
  }

  /* brand change splashes the card */
  const lastBrand = React.useRef("")
  React.useEffect(() => {
    if (brand.name && brand.name !== lastBrand.current) cardRef.current?.splash(undefined, 1)
    lastBrand.current = brand.name
  }, [brand.name])

  /* ---- inputs ---- */
  const onNum = (v: string) => {
    const d = v.replace(/\D/g, "")
    const b = brandOf(d)
    setNum(d.slice(0, maxLen(b)))
    setErrors((e) => ({ ...e, number: "" }))
  }
  const onExp = (v: string, prev: string) => {
    let d = v.replace(/\D/g, "").slice(0, 4)
    if (d.length === 1 && +d > 1) d = "0" + d
    const deleting = v.length < prev.length
    setExp(d.length > 2 || (d.length === 2 && !deleting) ? `${d.slice(0, 2)}/${d.slice(2)}` : d)
    setErrors((e) => ({ ...e, exp: "" }))
  }

  const validate = () => {
    const e: Record<string, string> = {}
    if (!luhn(num) || num.length < maxLen(brand) - (brand.name === "" ? 3 : 0)) e.number = "Check the card number"
    if (name.trim().length < 2) e.name = "Add the name on the card"
    if (!expiryOk(exp)) e.exp = "Invalid date"
    if (cvc.length !== brand.cvc) e.cvc = `${brand.cvc} digits`
    return e
  }

  /* ---- pay ---- */
  const resetTimer = React.useRef<number | undefined>(undefined)
  React.useEffect(() => () => { window.clearTimeout(resetTimer.current); cancelAnimationFrame(progRef.current.raf) }, [])

  const runProgress = (to: number, ms: number, done?: () => void) => {
    const P = progRef.current
    cancelAnimationFrame(P.raf)
    const from = P.p, t0 = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - t0) / ms)
      const e = 1 - Math.pow(1 - t, 3)
      P.p = from + (to - from) * e
      water.loop()
      if (t < 1) P.raf = requestAnimationFrame(tick)
      else { P.raf = 0; done?.() }
    }
    P.raf = requestAnimationFrame(tick)
  }

  const pay = async () => {
    if (phase === "processing" || phase === "success") return
    setDeclined("")
    let details: LiquidPayDetails
    if (mode === "form") {
      const e = validate()
      setErrors(e)
      const first = ["number", "name", "exp", "cvc"].find((k) => e[k])
      if (first) {
        setFocus(first)
        inputRefs.current[first]?.focus()
        setTimeout(() => water.shake(), 60)
        plip(300, 220)
        return
      }
      details = { method: "card", number: num, name: name.trim(), expiry: exp, cvc, brand: brand.name || "Card" }
    } else details = { method: "wallet", card: selected }
    ;(document.activeElement as HTMLElement | null)?.blur?.()
    setFlipped(false)
    progRef.current.p = 0
    setPhase("processing")
    water.setBlue(1)
    plip(420, 1300)
    runProgress(0.88, 1500)
    const started = performance.now()
    try {
      await (onPay ? onPay(details) : new Promise((r) => setTimeout(r, 1500)))
      const wait = Math.max(0, 1150 - (performance.now() - started))
      await new Promise((r) => setTimeout(r, wait))
      runProgress(1, 260, () => {
        setPhase("success")
        plip(660, 1760)
        const b = payRef.current?.getBoundingClientRect(), pr = panelRef.current?.getBoundingClientRect()
        if (b && pr) water.ripple(PAD + b.left - pr.left + b.width / 2, PAD + b.top - pr.top + b.height / 2, 1.6)
        cardRef.current?.splash(undefined, 1.4)
        try { navigator.vibrate?.(12) } catch { /* optional */ }
        if (resetAfter > 0) resetTimer.current = window.setTimeout(() => {
          setPhase("edit")
          water.setBlue(0)
          progRef.current.p = 0
        }, resetAfter)
      })
    } catch (err) {
      runProgress(0, 400, () => {
        setPhase("edit")
        water.setBlue(0)
        setDeclined(err instanceof Error && err.message ? err.message : "Ödeme reddedildi. Başka bir kart deneyin.")
        setTimeout(() => water.shake(), 30)
      })
    }
    force()
  }

  const busy = phase === "processing" || phase === "success"
  const level = phase === "processing" ? 0.9 : 0.42
  const statusText = phase === "processing" ? "Ödeme işleniyor" : phase === "success" ? `${money} ödeme tamamlandı` : declined

  /* ---- wallet stack ---- */
  const cw = Math.min(360, Math.max(240, width - 32))
  const ch = Math.round(cw / 1.586)
  const peek = Math.round(ch * 0.24)
  const selectCard = (id: string) => {
    if (busy || id === order[0]) return
    setOrder((o) => [id, ...o.filter((x) => x !== id)])
    plip(520, 900)
    setTimeout(() => cardRef.current?.splash(undefined, 0.9), 220)
  }
  const onStackKey = (e: React.KeyboardEvent) => {
    if (!["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"].includes(e.key)) return
    e.preventDefault()
    const i = cards.findIndex((c) => c.id === order[0])
    const n = cards[(i + (e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : cards.length - 1)) % cards.length]
    selectCard(n.id)
  }

  const payLabel = phase === "processing"
    ? <span className="lc-pay-label">İşleniyor<span className="lc-dots" aria-hidden="true"><i /><i /><i /></span></span>
    : phase === "success"
      ? <span className="lc-pay-label"><Check /></span>
      : <span className="lc-pay-label">{`${money} öde`}</span>

  const panelEvents = {
    onPointerMove: (e: React.PointerEvent) => {
      if (e.pointerType !== "mouse") return
      const pr = panelRef.current?.getBoundingClientRect()
      if (pr) water.pointer(e.clientX - pr.left + PAD, e.clientY - pr.top + PAD, true)
    },
    onPointerLeave: () => water.pointer(0, 0, false),
    onPointerDown: (e: React.PointerEvent) => {
      const pr = panelRef.current?.getBoundingClientRect()
      if (pr) water.ripple(e.clientX - pr.left + PAD, e.clientY - pr.top + PAD, 0.6)
    },
  }

  const head = (
    <div className="lc-head">
      <div className="lc-merchant"><span className="lc-kicker">Alıcı</span><span className="lc-mname">{merchant}</span></div>
      <div className="lc-amount">{money}</div>
    </div>
  )

  const payButton = (
    <button ref={payRef} type={mode === "form" ? "submit" : "button"} className="lc-pay" data-phase={phase} aria-busy={phase === "processing"} aria-disabled={busy} onClick={mode === "wallet" ? pay : undefined}>
      {payLabel}
    </button>
  )

  return (
    <div
      ref={rootRef}
      className={["nimbus-pay", className].filter(Boolean).join(" ")}
      data-tone={tone}
      data-layout={mode}
      data-gl={water.gl ? "on" : "off"}
      style={{ ["--lc-cw" as string]: `${cw}px`, ...style }}
    >
      <style dangerouslySetInnerHTML={{ __html: LC_CSS }} />
      <span className="lc-status" role="status" aria-live="polite">{statusText}</span>

      {mode === "form" ? (
        <div className="lc-stage">
          <WaterCard
            ref={cardRef}
            theme={brand.theme}
            number={num ? group(num, brand, "•") : "•••• •••• •••• ••••"}
            name={name || "Your name"}
            expiry={exp || "MM/YY"}
            cvc={cvc || "•".repeat(brand.cvc)}
            brand={brand.name}
            flipped={cardFlipped}
            level={level}
            bubbles={phase === "processing"}
            success={phase === "success"}
            width={Math.min(340, Math.max(260, width - 480))}
          />
        </div>
      ) : (
        <div className="lc-stack" role="radiogroup" aria-label="Kart seçin" onKeyDown={onStackKey} style={{ height: ch + peek * (cards.length - 1) + 4 }}>
          {cards.map((c) => {
            const i = order.indexOf(c.id)
            const front = i === 0
            return (
              <button
                key={c.id}
                type="button"
                role="radio"
                aria-checked={front}
                aria-label={`${c.label}, sonu ${c.last4}`}
                tabIndex={front ? 0 : -1}
                className="lc-slot"
                onClick={() => selectCard(c.id)}
                style={{ zIndex: i === 0 ? cards.length : i, transform: `translateY(${i === 0 ? peek * (cards.length - 1) : (i - 1) * peek}px)` }}
              >
                <WaterCard
                  ref={front ? cardRef : undefined}
                  theme={c.theme}
                  number={`•••• •••• •••• ${c.last4}`}
                  name={c.holder}
                  expiry={c.expiry}
                  cvc="•••"
                  brand={c.brand}
                  level={front ? level : 0.42}
                  bubbles={front && phase === "processing"}
                  success={front && phase === "success"}
                  live={front}
                  interactive={front}
                  width={cw}
                />
              </button>
            )
          })}
        </div>
      )}

      <div ref={panelRef} className="lc-panel" {...panelEvents} style={mode === "wallet" ? { width: cw + 20 } : undefined}>
        <span className="lc-glass" aria-hidden="true" />
        <canvas className="lc-water" ref={canvasRef} aria-hidden="true" />
        {head}
        {mode === "form" ? (
          <form className="lc-form" noValidate onSubmit={(e) => { e.preventDefault(); pay() }} aria-describedby={declined ? `${uid}-declined` : undefined}>
            {([
              { k: "number", label: "Card number", wide: true, input: { value: num ? group(num, brand) : "", inputMode: "numeric" as const, autoComplete: "cc-number", placeholder: "1234 1234 1234 1234", onChange: (e: React.ChangeEvent<HTMLInputElement>) => onNum(e.target.value) } },
              { k: "name", label: "Name on card", wide: true, input: { value: name, autoComplete: "cc-name", placeholder: "Alex Rivera", onChange: (e: React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value.slice(0, 26)); setErrors((x) => ({ ...x, name: "" })) } } },
              { k: "exp", label: "Expiry", wide: false, input: { value: exp, inputMode: "numeric" as const, autoComplete: "cc-exp", placeholder: "MM/YY", onChange: (e: React.ChangeEvent<HTMLInputElement>) => onExp(e.target.value, exp) } },
              { k: "cvc", label: "CVC", wide: false, input: { value: cvc, inputMode: "numeric" as const, autoComplete: "cc-csc", placeholder: brand.cvc === 4 ? "1234" : "123", onChange: (e: React.ChangeEvent<HTMLInputElement>) => { setCvc(e.target.value.replace(/\D/g, "").slice(0, brand.cvc)); setErrors((x) => ({ ...x, cvc: "" })) } } },
            ]).map((f) => (
              <div className={`lc-f${f.wide ? " lc-wide" : ""}`} key={f.k}>
                <label className="lc-l" htmlFor={`${uid}-${f.k}`}>{f.label}</label>
                <div className="lc-box" ref={(el) => { boxRefs.current[f.k] = el }} data-invalid={!!errors[f.k]}>
                  <input
                    {...f.input}
                    ref={(el) => { inputRefs.current[f.k] = el }}
                    id={`${uid}-${f.k}`}
                    name={f.k}
                    className="lc-in"
                    disabled={busy}
                    aria-invalid={!!errors[f.k]}
                    aria-describedby={errors[f.k] ? `${uid}-${f.k}-err` : undefined}
                    onFocus={() => { setFocus(f.k); setFlipped(f.k === "cvc") }}
                    onBlur={() => { if (f.k === "cvc") setFlipped(false) }}
                  />
                  {f.k === "number" && <span className="lc-tag" data-on={!!brand.name}>{brand.name}</span>}
                </div>
                {errors[f.k] && <span className="lc-err" id={`${uid}-${f.k}-err`}>{errors[f.k]}</span>}
              </div>
            ))}
            <div className="lc-f lc-wide">
              {payButton}
              {declined && <span className="lc-err" id={`${uid}-declined`} role="alert" style={{ textAlign: "center" }}>{declined}</span>}
            </div>
          </form>
        ) : (
          <>
            <div className="lc-rows">
              <div className="lc-row" ref={rowRef}>
                <span className="lc-row-k">Kart</span>
                <span className="lc-row-v"><span className="lc-mini" style={{ background: `var(--nc-back-${selected.theme}, ${selected.theme === "sky" ? "linear-gradient(160deg,#2E9BFF,#0050CC)" : selected.theme === "glass" ? "linear-gradient(160deg,#EEF7FF,#B9DCF8)" : "linear-gradient(160deg,#16244A,#050A1C)"})` }} />{selected.label} ·· {selected.last4}</span>
              </div>
              <div className="lc-row"><span className="lc-row-k">Toplam</span><span className="lc-row-v">{money}</span></div>
            </div>
            {payButton}
            {declined && <span className="lc-err" role="alert" style={{ display: "block", textAlign: "center" }}>{declined}</span>}
          </>
        )}
        <div className="lc-foot" data-ok={phase === "success"}>{phase === "success" ? <><span className="lc-ok-ico"><svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5.5 12.5 4.2 4.2L18.5 7.8" /></svg></span>{`${merchant} için ${money} ödendi (demo)`}</> : <><Lock />{note ?? (mode === "wallet" ? "Kart değiştirmek için dokunun · gerçek ödeme alınmaz" : "Örnek ödeme ekranı · gerçek ödeme alınmaz")}</>}</div>
      </div>
    </div>
  )
}

/** alias for registries that import { Component } */
export { LiquidCheckout as Component }

export default LiquidCheckout
