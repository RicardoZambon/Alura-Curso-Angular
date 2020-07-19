FROM node:alpine AS builder

WORKDIR /app

COPY ./API/package.json ./API/package-lock.json ./
RUN npm install

COPY ./API /app/
EXPOSE 3000
CMD [ "node", "server.js" ]
