# Next.js App Frontend for Social Services

## Development Environment
This app runs with pnpm. If it's not installed on your development server yet, do so.
It needs an backend server. This backend server is documented in docker-compose.yml.

To start it, you should do (check your .env file first! IMAGE_TAG and DOCKER_USER are important):

    docker compose up -d

This also starts the frontend server. If this step runs without error. You can reach

* __backend__ under http://localhost:8080/
* __frontend__ under http://localhost:3100/

To start the development version, go on with this command:

    pnpm run dev

To find out more about nextjs: see [here](./doc/nextjsapp.md). This app runs with React.
More details, you can find [here](./doc/react.md). It also uses Tailwind that is documented 
a bit more [here](./doc/tailwind.md).


## Deployment
There are a bunch of files necessary for deployment:

* [.dockerignore](.dockerignore) - This is intended for Dockerfile to ignore all files not to be copied into the Docker image
* [create_release_with_docker.sh](create_release_with_docker.sh) - The script to publish a new version of this client 
* [Dockerfile](Dockerfile) - how to build this Docker image

### Build and push image

Simply execute

    ./create_release_with_docker.sh

This script builds the image and pushes it to docker hub. 
Please ensure to have set DOCKER_USER properly (see .env).

## More information

