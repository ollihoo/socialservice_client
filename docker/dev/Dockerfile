FROM node:25-alpine
# This is the DEVELOPMENT Dockerfile
# RUN apk add --no-cache make g++ libc6-compat
RUN npm install -g pnpm

RUN mkdir /app && chown -R node:node /app
COPY --chown=node:node . /app

# Setze das Arbeitsverzeichnis
WORKDIR /app

COPY package*.json ./

USER node
ENV NEXT_TELEMETRY_DISABLED=1

RUN pnpm install

RUN pnpm i use-debounce


# Port (optional, aber empfehlenswert)
EXPOSE 3000

# Dev-Start
CMD ["pnpm", "run", "dev"]