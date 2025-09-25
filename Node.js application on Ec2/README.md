# My NodeJS App (EC2 Practice)

## Steps to Run on EC2

1. **Update system packages**
   ```bash
   sudo apt update -y && sudo apt upgrade -y
Install Node.js & npm

bash
Copy code
sudo apt install -y nodejs npm
Clone your GitHub repo

bash
Copy code
git clone https://github.com/<your-username>/<your-repo>.git
cd my-node-app
Install dependencies

bash
Copy code
npm install
Run the app

bash
Copy code
npm start
Open in browser

cpp
Copy code
http://<your-ec2-public-ip>:3010
⚠️ Don’t forget:

In your EC2 Security Group, add an Inbound Rule for TCP Port 3010.

yaml
Copy code

---

✅ That’s the complete **ready-to-use Node.js app** for your EC2 practice.  

👉 Do you also want me to add **PM2 setup** so that the app keeps running in the background even if you close the terminal?