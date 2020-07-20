FROM node:alpine AS builder

WORKDIR /app

COPY ./package.json ./package-lock.json ./
RUN npm install

COPY . /app/
EXPOSE 3000
CMD [ "node", "server.js" ]
