# Start from the Node.js base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy `package.json` and `package-lock.json` (if available) separately
COPY package*.json ./

# Install dependencies before copying the rest of the files
RUN npm install

# Copy all other files into the working directory
COPY . .

# Expose the port (default to 7860, or use an environment variable)
EXPOSE ${PORT:-7860}

# Run the start script
CMD ["bash", "start.sh"]