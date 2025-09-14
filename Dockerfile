 FROM mariadb:noble
 
 FROM php:8.1.33-apache

 FROM node:trixie


 WORKDIR /app

 COPY package.json ./

 RUN npm install

 EXPOSE 80

 COPY . .

 CMD ["npm", "run", "dev"]