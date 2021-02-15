#!/bin/bash
unameOut="$(uname -s)"
case "${unameOut}" in
    Linux*)     machine=Linux;;
    Darwin*)    machine=Mac;;
    CYGWIN*)    machine=Cygwin;;
    MINGW*)     machine=MinGw;;
    *)          machine="UNKNOWN:${unameOut}"
esac

nx deploy main-backend

if [ "$machine" == "MinGw" ]; then
  docker-compose stop
  docker rm nginx
  docker rm main
else
  sudo docker-compose stop
  sudo docker rm nginx
  sudo docker rm main
fi
if [ "$1" == "dev" ]; then
  echo "Docker-compose up for local development"
  conf="./tools/default-dev.conf"
else
  echo "Docker-compose up for production"
  conf="./tools/default-prod.conf"
fi

if [ "$machine" == "MinGw" ]; then
  NGINX_CONF=$conf docker-compose up -d --build
else
  NGINX_CONF=$conf sudo docker-compose up -d --build
fi

