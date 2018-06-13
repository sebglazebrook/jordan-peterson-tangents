FROM node:latest as js-assets

WORKDIR /app

COPY package* /app/

RUN npm install

COPY . /app/

CMD npx webpack --config webpack.config.js

FROM ruby:alpine

RUN apk --update add build-base sqlite-dev

WORKDIR /app

EXPOSE 9292

COPY Gemfile* /app/

RUN bundle install

COPY . /app/

COPY --from=js-assets /app/public/javascripts /app/public/javascripts

CMD bundle exec rackup --host 0.0.0.0
