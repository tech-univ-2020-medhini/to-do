FROM node

WORKDIR /app

COPY . .

RUN npm install
RUN migrate
RUN createdb

EXPOSE 8080

CMD ["node", "index.js"]