# Use the latest LTS version of Node.js
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first 
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the port 
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
