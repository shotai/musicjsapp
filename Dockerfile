FROM node:latest

COPY . /src
RUN cd src; \
npm install

EXPOSE 8000

CMD node /src/app.js
