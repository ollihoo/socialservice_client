FROM node:25-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm install


FROM base AS builder

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=dev
RUN npm run build --only=production


FROM deps AS runner
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["npm", "start"]

