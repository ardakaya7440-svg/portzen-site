# syntax=docker/dockerfile:1.7
# PORTZEN — Coolify (Docker) imajı. `next start` kullanılır (standalone bilerek kapalı:
# pglite/pg/sharp serverComponentsExternalPackages ile izleme riskini almamak için).
#
# Build-time:
#   ARG  NEXT_PUBLIC_SITE_ENV / NEXT_PUBLIC_GA_ID / NEXT_PUBLIC_META_PIXEL_ID  (istemci paketine gömülür)
#   SECRET PORTZEN_DATABASE_URL  (prebuild sync-content için; imaj katmanlarına/geçmişine YAZILMAZ)
#     docker build --secret id=PORTZEN_DATABASE_URL,env=PORTZEN_DATABASE_URL --build-arg NEXT_PUBLIC_SITE_ENV=staging .
#   Veritabanı yoksa build bilerek BAŞARISIZ olur (bkz. scripts/sync-content.mjs).

FROM node:22-bookworm-slim AS deps
WORKDIR /app
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
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN --mount=type=secret,id=PORTZEN_DATABASE_URL \
    if [ -f /run/secrets/PORTZEN_DATABASE_URL ]; then export PORTZEN_DATABASE_URL="$(cat /run/secrets/PORTZEN_DATABASE_URL)"; fi; \
    npm run build && npm prune --omit=dev

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
