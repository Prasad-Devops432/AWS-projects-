Awesome, Prasad! Let’s take your `README.md` to the next level by turning it into a student-style report with diagrams and cost analysis. This version will help you showcase your technical understanding and justify your infrastructure choices—perfect for college submissions or portfolio work.

---

# 🧾 Node.js App Deployment on AWS EC2 – Student Report

## 📘 Project Overview

This project demonstrates how to deploy a basic Node.js application on an AWS EC2 instance. It includes infrastructure setup, application deployment, and optional process management using PM2.

---

## 🧱 Architecture Diagram

```
+---------------------+       +---------------------+
|   User's Browser    | <---> |  EC2 Instance (Ubuntu) |
|  Access via Port 3010|       |  Node.js App Running   |
+---------------------+       +---------------------+
                                   |
                                   v
                          GitHub Repository
```

✅ **Security Group**: Inbound rule for TCP port `3010`  
✅ **App**: Node.js server listening on port `3010`

---

## ⚙️ Step-by-Step Setup

### 1. Update System Packages

```bash
sudo apt update -y && sudo apt upgrade -y
```

### 2. Install Node.js and npm

```bash
sudo apt install -y nodejs npm
```

### 3. Clone GitHub Repository

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo-folder>
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Start the Application

```bash
npm start
```

### 6. Access the App

```text
http://<your-ec2-public-ip>:3010
```

---

## 🔄 Optional: Use PM2 for Process Management

```bash
sudo npm install -g pm2
pm2 start app.js
pm2 startup
pm2 save
```

---

## 💰 Cost Analysis (Sample)

| Resource         | Type           | Estimated Monthly Cost |
|------------------|----------------|-------------------------|
| EC2 Instance     | t2.micro (Free Tier) | $0 (within limits)     |
| EBS Storage      | 8 GB           | ~$0.80                  |
| Data Transfer    | 15 GB/month    | ~$1.35                  |
| Total            | —              | ~$2.15                  |

> Note: Costs may vary based on region and usage. Use [Azure Cost Analysis](https://portal.azure.com/#view/Microsoft_Azure_CostManagement/CostAnalysis/scope/%2Fsubscriptions%2F4b0debb9-90ab-46db-8f7d-3f697f5bf2e8) or AWS Pricing Calculator for accurate estimates.

---

## 📁 Project Structure

```
my-node-app/
├── app.js
├── package.json
└── README.md
```

---

## 📌 Justification

- **EC2 (Ubuntu)**: Lightweight and flexible for student projects.
- **Node.js**: Ideal for building scalable web apps.
- **PM2**: Ensures app stays alive after logout or reboot.
- **GitHub**: Version control and easy collaboration.
