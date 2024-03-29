#!/bin/bash

nx deploy main-backend
nx deploy tweeter-backend

docker-compose stop
docker rm nginx
docker rm main
docker rm tweeter

if [ "$1" == "dev" ]; then
  echo "Docker-compose up for local development"
  docker-compose up -d --build
else
  echo "Docker-compose up for production"
  docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build
fi

