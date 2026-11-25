# syntax=docker/dockerfile:1.7
# PORTZEN — Coolify (Docker) imajı. `next start` kullanılır (standalone bilerek kapalı:
# pglite/pg/sharp serverExternalPackages ile izleme riskini almamak için).
#
# Build-time:
#   ARG  NEXT_PUBLIC_SITE_ENV / NEXT_PUBLIC_GA_ID / NEXT_PUBLIC_META_PIXEL_ID  (istemci paketine gömülür)
#   Build veritabanı GEREKTİRMEZ (aşağıya bakın). Gizli değerler yalnızca runtime env olarak verilir:
#     PORTZEN_DATABASE_URL, SESSION_SECRET, ADMIN_EMAIL, ADMIN_PASSWORD_HASH, CRON_SECRET
#     docker build --build-arg NEXT_PUBLIC_SITE_ENV=staging .

FROM node:22-bookworm-slim AS deps
WORKDIR /app
# Build sureci isareti: sunucudaki portzen-staging-deploy bu ENV'i tasiyan RUN adimlarinin cgroup'una
# sert bellek/CPU siniri yazar (3 GiB RAM, 256 MiB swap, 2 CPU). Runtime asamasina tasinmaz.
ENV PORTZEN_IMAGE_BUILD=1
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

FROM node:22-bookworm-slim AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
ARG NEXT_PUBLIC_SITE_ENV
ARG NEXT_PUBLIC_GA_ID
ARG NEXT_PUBLIC_META_PIXEL_ID
ENV NEXT_PUBLIC_SITE_ENV=${NEXT_PUBLIC_SITE_ENV} \
    NEXT_PUBLIC_GA_ID=${NEXT_PUBLIC_GA_ID} \
    NEXT_PUBLIC_META_PIXEL_ID=${NEXT_PUBLIC_META_PIXEL_ID}
# Kaynak sınırları (portzenserver01: 4C/8T, 7,6 GiB RAM, diğer projelerle paylaşımlı):
#  - V8 heap tavanı 2 GiB: build süreci kontrolsüz büyüyüp sunucuyu OOM'a sokmasın, kendi hatasıyla dursun.
#  - Statik sayfa üretimi en fazla 2 worker (her worker ayrı heap kullanır).
ENV NODE_OPTIONS=--max-old-space-size=2048 \
    NEXT_BUILD_CPUS=2 \
    PORTZEN_IMAGE_BUILD=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Build aşaması veritabanına BAĞLANMAZ: parola imaja, katman geçmişine veya build loguna girmez.
# Fiyat build'e GÖMÜLMEZ: tek kaynak çalışma anında Neon veritabanıdır (etiketli önbellek, admin değişikliği anında yansır).
# İçerik (CMS) yedeği repodaki src/data anlık görüntüsünden derlenir (PORTZEN_ALLOW_LOCAL_DB yalnızca bu RUN satırında,
# runner aşamasına taşınmaz). Çalışma zamanında PORTZEN_DATABASE_URL (runtime-only env) ile gerçek Postgres kullanılır.
RUN unset PORTZEN_DATABASE_URL; PORTZEN_ALLOW_LOCAL_DB=1 PGLITE_DIR=/tmp/pglite-build npm run build \
    && rm -rf /tmp/pglite-build .data && npm prune --omit=dev

FROM node:22-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 PORT=3000 HOSTNAME=0.0.0.0
COPY --from=builder --chown=node:node /app/package.json /app/next.config.mjs ./
COPY --from=builder --chown=node:node /app/node_modules ./node_modules
COPY --from=builder --chown=node:node /app/public ./public
COPY --from=builder --chown=node:node /app/content ./content
COPY --from=builder --chown=node:node /app/.next ./.next
USER node
EXPOSE 3000
CMD ["node_modules/.bin/next", "start", "-p", "3000", "-H", "0.0.0.0"]
