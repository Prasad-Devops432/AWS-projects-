# -------- Stage 1: Build --------
FROM node:20-slim AS builder

WORKDIR /usr/src/app

# Update and upgrade to patch vulnerabilities
RUN apt-get update && apt-get upgrade -y

COPY package*.json ./
RUN npm install --production

COPY . .

# -------- Stage 2: Run --------
FROM node:20-slim

WORKDIR /usr/src/app

# Update and upgrade to patch vulnerabilities
RUN apt-get update && apt-get upgrade -y

COPY --from=builder /usr/src/app ./

EXPOSE 3010
CMD ["npm", "start"]
