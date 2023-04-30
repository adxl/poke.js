#! /bin/bash

# init env files
cp .env.local .env
cp public/.env.local public/.env

# build docker images
docker compose build

# run containers
docker compose up -d
