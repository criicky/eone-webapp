# Take base image
FROM node:18
# Set the working directory
WORKDIR /app
# Copy package.json and package-lock.json
COPY package*.json ./
RUN npm install
# Copy the rest of the application code
COPY . .
# Expose the port the app runs on
EXPOSE 3000
# Set the environment variable
ENV NODE_ENV=development
# Start the application
CMD ["npm", "run", "dev", "--", "--host"]