FROM node as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
ARG configuration=production
RUN npm run build -- --output-path=./dist/out --configuration $configuration

FROM nginx
COPY ./docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html

# FROM node:alpine

# RUN apk add --quiet --no-cache bash && \
#     yarn global add @angular/cli && \
#     yarn cache clean && \
#     rm -rf /var/cache/* /tmp/*

# EXPOSE 4200

# WORKDIR /home/node

# CMD ["/bin/sh"]