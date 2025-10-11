# Next.js App Frontend for Social Services

## How to start

To start this application, please do the following steps:

    cp .env.example .env

Edit these entries in .env as follows. Ask your fellows for the right repo:

    DOCKER_USER=<needed docker rpo>
    FE_IMAGE_TAG=xxx
    BE_IMAGE_TAG=yyy

IMPORTANT: check for the most up-to-date version. If you work on
MacOS, you need to use the tags beginning with arm\_. For linux
environments there is no prefix in use.

To see the basics, activate basic data configuration for the backend:

    cd ./docker/backend
    cp Beratungsstellen_TEMPLATE.tsv Beratungsstellen.csv

This tsv file is just an very basic example. Ask your fellows, where to get complete data.
With this configuration, you can now start frontend and backend with

    docker compose up -d

This also starts the frontend server. If this step runs without error. You can reach

- **backend** under http://localhost:8080/
- **frontend** under http://localhost:3100/

## Development Environment

This app runs with pnpm. If it's not installed on your development server yet, do so.
It needs an backend server. This backend server is documented in docker-compose.yml.

To start the development version, go on with this command:

    pnpm run dev

To find out more about nextjs: see [here](./doc/nextjsapp.md). This app runs with React.
More details, you can find [here](./doc/react.md). It also uses Tailwind that is documented
a bit more [here](./doc/tailwind.md).

## Deployment

There are a bunch of files necessary for deployment:

- [.dockerignore](.dockerignore) - This is intended for Dockerfile to ignore all files not to be copied into the Docker image
- [create_release_with_docker.sh](create_release_with_docker.sh) - The script to publish a new version of this client
- [Dockerfile](Dockerfile) - how to build this Docker image

### Build and push image

Simply execute

    ./create_release_with_docker.sh

This script builds the image and pushes it to docker hub.
Please ensure to have set DOCKER_USER properly (see .env).

## More information
