FROM node:alpine AS builder

WORKDIR /app

COPY ./package.json ./package-lock.json ./
RUN npm install

COPY . /app/
RUN npm run build-prod

FROM nginx:alpine

COPY --from=builder /app/dist/AluraPic /usr/share/nginx/html