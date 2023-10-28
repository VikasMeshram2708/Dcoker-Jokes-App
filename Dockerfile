# First tell the base image 

FROM node:latest

# This copies the server.js into the home directory
COPY . ./app

# then head out to that directory 
WORKDIR /app

RUN npm install

# Bundle the app source
COPY . .

CMD ["node", "server.js"]

EXPOSE 5001