# Dockerfile

# Use node alpine as it's a small node image
FROM node:current-alpine
ENV YARN_CACHE_FOLDER /yarn
RUN mkdir -p $YARN_CACHE_FOLDER

# Create the directory on the node image 
# where our Next.js app will live
RUN mkdir -p /app
RUN mkdir /usr/local/share/ca-certificates
RUN touch /usr/local/share/ca-certificates/devcert.crt  
RUN apk add openssl sudo ca-certificates
# Set /app as the working directory
WORKDIR /app

# Copy package.json and package-lock.json
# to the /app working directory
COPY package*.json /app

# Install dependencies in /app

RUN yarn install --ignore-engines
RUN yarn add devcert --ignore-engines
# Copy the rest of our Next.js folder into /app


# Ensure port 3000 is accessible to our system
EXPOSE 3000

# Run yarn dev, as we would via the command line 


CMD ["yarn", "devssl"]