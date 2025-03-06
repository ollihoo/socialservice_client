#!/bin/zsh

if [ -f .env ]; then
    source .env
else
    echo ".env-Datei not found!"
    exit 1
fi

IMAGE_TAG=$(date +%y%m%d%H%M)

docker buildx build --platform linux/amd64 -t ${DOCKER_USER}/socialservices_frontend:$IMAGE_TAG . && \
docker push ${DOCKER_USER}/socialservices_frontend:${IMAGE_TAG}

