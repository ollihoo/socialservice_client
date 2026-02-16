# Next.js App Frontend for Social Services

## How to start

To start this application, please do the following steps:

    cp .env.example .env

Edit these entries in .env as follows:

    DOCKER_USER=<needed docker rpo>
    FE_IMAGE_TAG=xxx
    BE_IMAGE_TAG=yyy

IMPORTANT: check for the most up-to-date version. If you work on MacOS, you need to use the 
tags beginning with arm\_. For linux environments there is no prefix in use. 
Ask your fellows for the right docker repo and current tags.

This app uses a separate backend. This backed needs basic data. This data is here:

    cd ./docker/backend/input
    cp Beratungsstellen_TEMPLATE.tsv Beratungsstellen.tsv

The shown tsv file ("tab-separated values") just contains a basic data setup. 
This tsv file is just a very basic example. Ask your fellows, where to get complete data.

With this configuration, you can now start frontend and backend from project root directory with

    docker compose up -d

If done, you should reach both, frontend and backend with these URLs:

- **backend** under http://localhost:8080/
- **frontend** under http://localhost:3100/

## More ressources
- [Development Environment](doc/development.md)
