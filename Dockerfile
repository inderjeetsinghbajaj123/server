FROM node

workdir /app

# cache ke liye optimise this Dockerfile
COPY package*.json package.json
# COPY package-lock.json package-lock.json
RUN npm install


# COPY index.js index.js
COPY . .

CMD ["node", "index.js"]