FROM node:21-alpine3.18

WORKDIR /my-app

COPY package*.json .

RUN npm i

COPY . .

EXPOSE 3000

ENTRYPOINT [ "npm" ]

CMD [ "start" ]