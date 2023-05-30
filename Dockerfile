FROM node:alpine3.16 as builder

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY ./ ./

RUN yarn build

FROM nginx:1.23.1-alpine as prod

WORKDIR /usr/share/nginx/html

COPY default.conf /etc/nginx/conf.d/default.conf

COPY /ssl/omar_ssl.crt /etc/nginx/omar_ssl.crt
COPY /ssl/omar_ssl.key /etc/nginx/omar_ssl.key

COPY --from=builder --chown=nginx:nginx /app/dist .

EXPOSE 443

FROM node:alpine3.16 as dev

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn

CMD ["yarn", "dev"]