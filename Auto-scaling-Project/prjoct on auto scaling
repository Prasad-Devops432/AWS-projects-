AWS Cloud Deployment with Python on EC2  
This repository provides a setup for deploying a Python application on AWS EC2 instances in a highly available architecture.  

**Architecture Overview**  
- **VPC and Subnets**: A Virtual Private Cloud (VPC) spans two Availability Zones, each with a public subnet (for load balancing) and a private subnet (for secure EC2 instances).  
- **Application Load Balancer**: Handles incoming traffic across EC2 instances in both zones to ensure high availability and avoid single points of failure.  
- **NAT Gateway**: Allows private subnet instances to access the internet for updates like downloading Python packages.  
- **Auto Scaling Group**: Adjusts the number of EC2 instances based on demand for optimal performance and cost efficiency.  
- **Security Groups**: Manage inbound and outbound traffic, enabling HTTP/HTTPS for the application and SSH for management.  
- **S3 Gateway**: Provides secure data access for the Python application.  

**Python Application Deployment**  
- **Application**: A sample Python web application (app.py) is deployed on EC2 instances in private subnets.  
- **Deployment Steps**:  
  - Upload app.py to EC2 instances via SCP: `scp -i key.pem app.py ec2-user@<private-ip>:~`  
  - SSH into each instance and install dependencies (e.g., `pip install flask`).  
  - Run the application: `python app.py`.  

**Access**  
The application is accessible through the Application Load Balancer's public endpoint.  

**Repository Contents**  
- **app.py**: Example Python web application (e.g., using Flask) hosted on EC2 instances.  
- Additional configuration files or scripts may be included as needed.  

**Getting Started**  
- Set up an AWS account and configure the VPC, subnets, NAT Gateway, and Application Load Balancer.  
- Launch EC2 instances in private subnets with the Auto Scaling Group.  
- Configure security groups to allow HTTP/HTTPS and SSH traffic.  
- Deploy app.py following the steps above.  
- Access the application using the load balancer's DNS name.  