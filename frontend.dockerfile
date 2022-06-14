# Use small docker image
FROM node:slim
WORKDIR /app
COPY web/package.json
RUN npm install
COPY . .
EXPOSE 3000
