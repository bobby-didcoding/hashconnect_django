# pull official base image
FROM --platform=linux/amd64 node:14.17.4-alpine
RUN apk update && apk add git
RUN mkdir /code
COPY . /code/
WORKDIR /code
ENV PATH /code/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./

RUN npm update caniuse-lite browserslist
CMD ["npm", "start"] 
