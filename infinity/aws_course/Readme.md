# What is a Server?

- **CPU**
- **RAM**: Brain of Server
- **Data (Hard Disk)**
- **Database**: For querying
- **Network**: Routers, Switch, DNS

## Networking

- **Router**: Passes data for the server
- **Switch**: Connects the server to destination

## Problems with In-House Servers

- Paying rent
- Paying for power, cooling, and maintenance
- Hardware modifications take time
- Scaling is limited
- Issues with disasters, backups, and monitoring services

## To Externalize, We Use Cloud Computing

- On-demand use of resources 
- Pay-as-you-go pricing (pay only for what you use)
- Request specific resources as needed
- Instant usage 
- Simple access to all resources

### Examples

- **Gmail**: Pay only for stored emails
- **Dropbox**: Initially built on AWS
- **Netflix**: Built on AWS (cloud service -> video on demand)

## Cloud Deployment Types

- **Private**: Full control, security, specific needs [Rackspace]
- **Public**: Owned by third-party cloud service providers, accessible via the internet [Azure, Google Cloud, AWS]
- **Hybrid Cloud**: Combine on-premises architecture with cloud services; security in private and cost-effective in public cloud

## 5 Characteristics of Cloud Computing

1. **On-demand self-service**: Provision resources without human interaction from the service provider
2. **Broad Network Access**: Resources accessible over the internet
3. **Multi-tenancy and Resource Pooling**: Multiple customers share resources
4. **Rapid Elasticity and Scalability**
5. **Measured Service**

## Six Advantages of Cloud

1. Trade off capital expenses with operational expenses, reducing ownership costs
2. Large scale operations reduce prices (AWS is more efficient due to scale)
3. No need to guess capacity; scalability is easy
4. Lower maintenance costs
5. Go global in minutes
6. Agility

## Types of Cloud Computing

- **IaaS**: Provides building blocks of cloud, manage your own architecture 
  - Examples: EC2, GCP, Azure, Rackspace, Digital Ocean, Linode
- **PaaS**: Removes the need to manage the architecture, focus on deployment and management of resources 
  - Examples: Elastic Beanstalk, GCK, Heroku, Azure
- **SaaS**: Run and managed by the provider 
  - Examples: Google Apps, Dropbox, Zoom

## Pricing Types

- **Pay-as-you-go**: Pay only for what you use
- **Savings Plan**: Commit to usage for discounts
- **Reserved Instances**: Pre-purchase resources at a lower cost
- **Spot Instances**: Bid on unused capacity at lower prices
- **Dedicated Hosts**: Physical servers dedicated to your use

## IAM (Identity and Access Management)

### Principles

- **Least Privilege Principle**: Grant access only to what is needed
- **Global Service**: Some IAM consoles are region-specific
- **Best Practice**: Use IAM users instead of root login

### IAM Password Policy

- Setup a password policy for your root account

### MFA (Multi-Factor Authorization)

- Protect root and IAM accounts
- MFA = Password you know + Security device you own
- Password + MFA = Successful login

### MFA Devices in AWS

- **Virtual MFA Device**: Google Authenticator, Authy (Phone only)
- **Universal 2nd Factor (U2F) Security Key**: Physical key (third-party)
- **Hardware Key Fob MFA Device**: Gemalto (third-party)
- **Hardware Key Fob MFA Device for AWS GovCloud**: SurePassID

### Access AWS

- **AWS CLI**
- **AWS CloudShell**: Commands same as CLI and Linux

### IAM Roles for Services

Common Roles:

- **EC2 Instance Roles**
- **Lambda Function Roles**
- **Roles for CloudFormation**

### IAM Security Tools

- **IAM Credentials Report**: Account-level
- **IAM Access Advisor**: User-level

### IAM Guidelines & Best Practices

- Don’t use the root account except for AWS account setup
- One physical user = One AWS user
- Assign users to groups and assign permissions to groups
- Create a strong password policy
- Use and enforce Multi-Factor Authentication (MFA)
- Create and use roles for giving permissions to AWS services
- Use Access Keys for Programmatic Access (CLI/SDK)
- Audit permissions of your account using IAM Credentials Report & IAM Access Advisor
- Never share IAM users & Access Keys

## EC2

- **Elastic Compute Cloud** (IaaS)
- Most popular of AWS offerings
- **Capabilities**:
  - Rent Virtual Machines (EC2)
  - Store data on virtual drives (EBS)
  - Distribute load across machines (ELB)
  - Scale services using an auto-scaling group (ASG)
- Fundamental to understand Cloud

### EC2 VMs

- **OS Selection**
- **Resource Requirements** with specifications
- **Firewall Rules**: Security
- **Bootstrap Script**: EC2 user data
