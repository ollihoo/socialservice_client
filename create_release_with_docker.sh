#!/bin/bash

if [ "$1" = "deploy" ]; then
  DEPLOY=true
fi

if [ -f .env ]; then
    source .env
else
    echo ".env file not found!"
    exit 1
fi

starttime=$(date +%s)
IMAGE_TAG=$(date +%y%m%d%H%M)

docker buildx build --platform linux/amd64 -t ${DOCKER_USER}/socialservices_frontend:$IMAGE_TAG .

if [ $? -eq 0 ]; then
    echo "✅ docker build successful"
else
    echo "❌ docker build failed"
    exit 1
fi

if [ "$DEPLOY" = "true" ]; then
  docker push ${DOCKER_USER}/socialservices_frontend:${IMAGE_TAG}

 if [ $? -eq 0 ]; then
       endtime=$(date +%s)
       delta=$((endtime - starttime))
       echo "Duration: $delta seconds"
       echo "✅ Ok. Latest IMAGE: ${DOCKER_USER}/${APP_NAME}:${IMAGE_TAG}"
       exit 0
   else
       echo "❌ docker push failed"
       exit 1
   fi
else
  endtime=$(date +%s)
  delta=$((endtime - starttime))
  echo "File hasn't been pushed to docker hub. Duration: $delta s"
  exit 1
fi