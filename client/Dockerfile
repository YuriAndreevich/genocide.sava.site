FROM node:16-alpine AS node-16

RUN node -v && npm -v && yarn -v
RUN apk --no-cache --update --virtual build-dependencies add make g++ libtool automake autoconf vips-dev nasm

WORKDIR /var/www/client
COPY package.json yarn.lock ./
RUN date; yarn install; date; du -h ./node_modules -d 0

COPY . .

RUN ln -s /var/www/api/src/wp-content/uploads /var/www/client/content/assets/uploads

EXPOSE 8000
CMD ["yarn", "develop"]
