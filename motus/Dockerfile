# the Debian wheezy image with node 8.5.0 installed
FROM node

# looks like you have a typo here... changed /usr/scr/app to /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/
RUN npm install 
COPY . .


EXPOSE 3000
CMD ["node", "index.js"]

#sudo docker run --rm -d -p 3000:3000/tcp motus:latest


