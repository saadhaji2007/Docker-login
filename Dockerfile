FROM node

ENV MONGO_DB_USERNAME=saad \
    MONGO_DB_PASSWORD=docker2025

RUN mkdir -p delta/nodeapp

COPY . /delta/nodeapp 

CMD ["node", "delta/nodeapp/server.js"]
