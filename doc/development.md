# Development Environment

## Frontend

This app runs with [pnpm(ext. link)](https://pnpm.io/) and [Next.js](./nextjsapp.md). 
If it's not installed on your development server yet, do so.

For Mac and homebrew:

    brew install pnpm
    pnpm install use-debounce

To start the development version, go on with this command:

    pnpm run dev

## Backend
This app is tightly bound to a backend server. Ask your fellow for more information about it.

This project has a basic setup. It can be fed with TSV data listing socialservices (see .tsv file).  
The docker setup contains this server to start it easily. If you experience problems, check if there is 
a more recent version available. See more in [docker-compose.yml](../docker-compose.yml).

## Deployment

There are a bunch of files necessary for deployment:

- [.dockerignore](../.dockerignore) - This is intended for Dockerfile to ignore all files not to be copied into the Docker image
- [create_release_with_docker.sh](../create_release_with_docker.sh) - The script to publish a new version of this client
- [Dockerfile](../Dockerfile) - how to build this Docker image

### Build and push image

Simply do

    ./create_release_with_docker.sh

This script builds the image and pushes it to docker hub.
Please ensure to have set DOCKER_USER properly (see .env).
