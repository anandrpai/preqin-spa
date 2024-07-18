# Preqin Technical Test

This project is a single-page application (SPA) that interacts with a locally running API to display a list of investors. It uses React for the front end and Docker for running the API server.

## Getting Started

You can follow these instructions to set up and run the project on your local machine.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Docker](https://www.docker.com/products/docker-desktop) is installed on your machine.
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) are installed.
- A code editor like [Visual Studio Code](https://code.visualstudio.com/).

## Installation

1. Clone the Repository
   git clone https://github.com/yourusername/preqin-technical-test.git
   cd preqin-technical-test
   
2. Navigate to the API Directory and Build the Docker Image
  Ensure Docker is running, then execute the following command in the terminal to build the API Docker container: docker build -t preqin-api .
  Start the Docker container for the API with the command: docker run -p 8000:8000 preqin-api
  The API should now be running at http://127.0.0.1:8000.

3. Running the React App
  Navigate to the React App Directory: cd ../preqinSPA
  Install the necessary npm packages by running: npm install axios react-router-dom
  Launch the React app with the command: npm start
  The app will be available at http://localhost:3000.

