FROM node:25-alpine AS base

ENV NEXT_TELEMETRY_DISABLED=1


RUN mkdir /app

RUN cd /
RUN npx create-next-app@latest app --yes

WORKDIR /app


EXPOSE 3000
ENV PORT=3000
# Starte die Anwendung
CMD ["top"]
#CMD ["npm", "run", "dev"]
