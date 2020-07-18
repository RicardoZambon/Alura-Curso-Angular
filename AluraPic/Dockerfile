FROM node:alpine AS builder

WORKDIR /app

COPY ./AluraPic/package.json ./AluraPic/package-lock.json ./
RUN npm install

COPY ./AluraPic /app/
RUN npm run build --prod

FROM nginx:alpine

COPY --from=builder /app/dist/AluraPic /usr/share/nginx/html/
