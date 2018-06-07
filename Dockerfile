FROM ruby:alpine

RUN apk --update add build-base sqlite-dev

WORKDIR /app

EXPOSE 9292

COPY Gemfile* /app/

RUN bundle install

COPY . /app/

CMD  rackup --host 0.0.0.0
