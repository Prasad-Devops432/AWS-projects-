<<<<<<< HEAD
# MyApp – Node.js + Express Static Website

This project is a simple **Node.js + Express server** that serves static files (HTML, CSS, JS) from a `public` directory. It demonstrates how to configure environment variables with `.env`, run locally, and deploy to an AWS EC2 instance.

---

## 📂 Project Structure

```
my-app/
├─ .env
├─ package.json
├─ server.js
└─ public/
   ├─ index.html
   ├─ style.css
   └─ script.js
```

---

## ⚙️ Prerequisites

* **Node.js** (v16 or above recommended)
* **npm** (comes with Node.js)
* An **AWS EC2 instance** (Ubuntu/Debian/other Linux distro)

---

## 🚀 Setup and Installation

### 1. Clone the project (or copy files)

```bash
git clone <your-repo-url> my-app
cd my-app
```

### 2. Create a `.env` file

Inside the project root:

```env
PORT=3010
APP_NAME=MyApp
```

### 3. Install dependencies

```bash
npm install
```

This will install:

* [express](https://www.npmjs.com/package/express) (for serving HTTP requests)
* [dotenv](https://www.npmjs.com/package/dotenv) (for environment variables)

### 4. Run locally

```bash
node server.js
```

If successful, you should see:

```
✅ MyApp is running at http://localhost:3010
```

Open [http://localhost:3010](http://localhost:3010) in your browser.

---

## 🌍 Deployment on AWS EC2

### 1. SSH into your EC2 instance

```bash
ssh -i your-key.pem ubuntu@<EC2_PUBLIC_IP>
```

### 2. Install Node.js & npm

For Ubuntu/Debian:

```bash
sudo apt update
sudo apt install -y nodejs npm
```

Verify:

```bash
node -v
npm -v
```

### 3. Upload project files

Options:

* Use **git**:

  ```bash
  git clone <your-repo-url> my-app
  cd my-app
  ```
* Or manually upload files via **SCP**:

  ```bash
  scp -i your-key.pem -r ./my-app ubuntu@<EC2_PUBLIC_IP>:/home/ubuntu/
  ```

### 4. Install dependencies

```bash
cd my-app
npm install
```

### 5. Run the app

```bash
node server.js
```

If successful:

```
✅ MyApp is running at http://localhost:3010
```

### 6. Configure EC2 Security Group

* Go to AWS Console → **EC2** → **Security Groups**
* Edit **Inbound rules**
* Add **Custom TCP Rule**:

  * Port range: `3010`
  * Source: `0.0.0.0/0` (or restrict to your IP)

### 7. Access your app

Open in browser:

```
http://<EC2_PUBLIC_IP>:3010
```

---

## 🔒 (Optional) Run App in Background with PM2

Install PM2 globally:

```bash
sudo npm install -g pm2
```

Start app with PM2:

```bash
pm2 start server.js --name "myapp"
```

Auto-start on reboot:

```bash
pm2 startup
pm2 save
```

---

## 🛠 Troubleshooting

### ❌ “Cannot GET /”

* Ensure `index.html` exists inside `public/`.
* Check `server.js` is pointing to the correct path.

### ❌ Port not accessible

* Make sure EC2 **Security Group inbound rule** allows port `3010`.
* Use `curl http://localhost:3010` inside EC2 to test locally.


=======
# Maven Web App - CI/CD Project

This project demonstrates a simple CI/CD pipeline using **GitHub**, **Jenkins**, **Maven**, and **Docker**.

## Steps:
1. Clone this repo in Jenkins.
2. Build using Maven (`mvn clean package`).
3. Containerize using Docker.
4. Run container on port **1990**.
5. Access the app at `http://<your-server-ip>:1990`.
>>>>>>> e968115 (my maven application for CICD pipline)
