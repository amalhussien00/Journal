# -------- Build Stage --------
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source
COPY . .

# Build React app for production
RUN npm run build

# -------- Production Stage --------
FROM nginx:alpine

# Copy built React app to Nginx default folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose default HTTP port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
