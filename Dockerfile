
FROM node:23-alpine AS base
RUN apk add --no-cache python3 py3-pip
RUN apk add --no-cache make g++ libc6-compat
RUN npm install -g pnpm

RUN mkdir /app && chown -R node:node /app
COPY --chown=node:node . /app

# Setze das Arbeitsverzeichnis
WORKDIR /app

COPY package*.json ./

USER node
ENV NEXT_TELEMETRY_DISABLED=1
# Installiere die Abhängigkeiten
RUN pnpm install
RUN pnpm i use-debounce


# Baue die Anwendung für die Produktion
RUN pnpm run build


EXPOSE 3000
ENV PORT=3000
# Starte die Anwendung
CMD ["pnpm", "next", "start"]
