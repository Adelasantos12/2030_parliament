# Use an official Node.js runtime as a parent image
FROM node:lts-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages
RUN npm install

# Bundle app's source
COPY . .

# Make port 5001 available to the world outside this container
EXPOSE 5001

# Run index.js when the container launches
CMD ["npm", "start"]