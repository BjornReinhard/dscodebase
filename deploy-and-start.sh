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
else
  sudo docker-compose stop
fi
if [ "$1" == "dev" ]; then
  echo "Docker-compose up for local development"
  conf="./tools/default-dev.conf"
else
  echo "Docker-compose up for production"
  conf="./tools/default-prod.conf"
fi

NGINX_CONF=$conf docker-compose up
