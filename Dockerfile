FROM node:14.16.0-alpine AS builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build --prod

FROM nginx:stable-alpine

COPY --from=builder /usr/src/app/dist/rinkgo-frontend /usr/share/nginx/html
