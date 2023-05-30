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
COPY --from=builder --chown=nginx:nginx /app/dist .

FROM node:alpine3.16 as dev

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn

CMD ["yarn", "dev"]