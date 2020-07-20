FROM node:12-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install
RUN npm install -g @angular/cli@10.0.3

COPY . /usr/src/app

EXPOSE 4200/tcp
EXPOSE 49153

CMD ng serve --host 0.0.0.0
