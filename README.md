## Next.js App Frontend for Social Services

This app runs with pnpm. If it's installed on your development server, do so.

Start development version with this command:

    pnpm run dev

Build the app for production:

    pnpm run build

Run the built app in production mode:

    pnpm start

Config Files: You'll also notice config files such as next.config.js at the root of your application. Most of these
files are created and pre-configured when you start a new project using create-next-app.

# Development Environment


# build docker container
There are a bunch of files necessary for deployment:

* [.dockerignore](.dockerignore) - This is intended for Dockerfile to ignore all files not to be copied into the Docker image
* [create_release_with_docker.sh](create_release_with_docker.sh) - The script to publish a new version of this client 
* [Dockerfile](Dockerfile) - how to build this Docker image

## Build and push image

    docker compose build
    docker push ${DOCKER_USER}/socialservices_frontend:${IMAGE_TAG}

# More information
* more about nextjs: see [here](./doc/nextjsapp.md)
* more about react: see [here](./doc/react.md)
* more about tailwind: see [here](./doc/tailwind.md)
