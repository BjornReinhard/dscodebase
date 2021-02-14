FROM node:lts-alpine
WORKDIR /app
COPY ./apps/main/backend/ecosystem.config.js .
COPY ./dist/apps/main/backend .
COPY ./dist/apps/main/frontend ./public
ENV PORT=5000
EXPOSE ${PORT}
RUN npm i --production
RUN npm i -g cross-env pm2
