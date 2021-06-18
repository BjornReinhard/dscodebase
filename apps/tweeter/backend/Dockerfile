FROM node:lts-alpine
WORKDIR /app
COPY ./apps/tweeter/backend/ecosystem.config.js .
COPY ./dist/apps/tweeter/backend .
ENV PORT=5001
EXPOSE ${PORT}
RUN npm i --production
RUN npm i -g cross-env pm2
RUN npm i -S tslib
RUN npm i -D dotenv
RUN npm i -D prisma
