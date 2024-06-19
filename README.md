This repository demonstrates a streamlined method for deploying a Node.js REST API on an AWS EC2 instance using GitHub Actions for continuous integration and continuous deployment (CI/CD).

Overview
The project utilizes GitHub Actions workflows to automate the CI/CD pipeline for deploying changes to a Node.js application on an EC2 instance:

Continuous Integration (CI): Automatically builds and tests the application upon each push to the main branch.
Continuous Deployment (CD): Automatically deploys changes to the EC2 instance after successful CI completion.
Setup Instructions
Follow these steps to establish the deployment pipeline for your Node.js REST API on AWS EC2:

Create an EC2 Instance:

Set up a new EC2 instance in your AWS account or use an existing one.
Generate or use an existing SSH key pair for accessing the instance.
Git Repository Setup:

Create a new Git repository and push your Node.js application code to it.
GitHub Actions Setup:

Navigate to your repository settings on GitHub and configure Actions.
Add a self-hosted runner as per the setup instructions provided.
Environment Setup for GitHub Actions:

Create a .env file containing your application's environment variables.
Add these variables securely as secrets in your GitHub repository settings.
CI/CD Workflows:

Define CI/CD workflows within the .github/workflows directory of your repository.
Customize these workflows to align with your specific project requirements.
Environment Setup on EC2 Instance:

Install Node.js and Nginx on your EC2 instance.
Configure Nginx as a reverse proxy to your Node.js application.
Utilize PM2 to manage the Node.js process on the server.
Workflow Explanation
CI Process: Executes tasks such as code checkout, Node.js environment setup, dependency installation, and optionally, running tests upon each main branch push.
CD Process: Upon successful CI completion, triggers tasks including SSH connection to the EC2 instance, pulling the latest code changes, restarting the Node.js application, and validating successful deployment.
Directory Structure
src/: Contains the source code for the Node.js application.
.github/workflows/: Holds configuration files for CI/CD workflows.
.env: Stores environment variables for the Node.js application.
server.js: Entry point for the Node.js application.
package.json: Configuration file specifying dependencies managed by npm.
By following these steps and configuring the described workflows and setups, you can automate the deployment of your Node.js REST API to an AWS EC2 instance using GitHub Actions effectively.
