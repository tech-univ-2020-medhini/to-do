FROM node

WORKDIR /app

COPY . .

RUN npm install
RUN migrate
RUN createdb

EXPOSE 8000

CMD ["./hello"]