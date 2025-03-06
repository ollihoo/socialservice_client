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

# build docker container

## Update tag
Go to file **.env** und **update entry IMG_TAG** to appropriate version.
This value is automatically used in docker compose. Check also **DOCKER_USER**.

## Build and push image

    docker compose build
    docker push ${DOCKER_USER}/socialservices_frontend:${IMAGE_TAG}


# More information
* more about nextjs: see [here](./doc/nextjsapp.md)
* more about react: see [here](./doc/react.md)
* more about tailwind: see [here](./doc/tailwind.md)
