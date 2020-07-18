FROM node:alpine AS builder

WORKDIR /AluraPic

COPY . .

RUN npm install && \
    npm run build

FROM nginx:alpine

COPY --from=builder /AluraPic/dist/AluraPic/* /usr/share/nginx/html/
