FROM node:boron

# Create application dir
RUN mkdir /app
#RUN mkdir /public
WORKDIR /app

# Install NodeJS modules
COPY package.json /app
RUN npm install

# Copy sources
#ADD . /app

#RUN npm run build:test
#CMD rm -rf /public/* && cp /app/public/* /public/
