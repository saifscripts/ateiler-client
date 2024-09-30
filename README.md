# Ateiler || Sporting Goods E-commerce Platform

### [Live URL](https://ateiler-alpha.vercel.app) | [Base URL (Server)](https://ateiler-server.vercel.app)

### [Backend Repository](https://github.com/saifscripts/ateiler-server)

## Introduction

Atelier provides a wide range of sports equipment and accessories. This platform's user-friendly design makes shopping and product management easier for customers and administrators.

## Project Description

This project is designed for an e-commerce website that sells sporting goods. Several functionalities are available, including product browsing, detailed product views, cart management, checkout processes, and an admin interface.

## Features

- Effective product browsing and filtering.
- Detailed product views with the ability to add items to the cart.
- Cart management with price calculations and quantity adjustments.
- Smooth checkout process with Cash on Delivery.
- Admin interface for adding, updating, and deleting products.
- Admin interface for managing categories and brands.
- Improved user experience with animations and smooth transitions.
- Responsive design for a seamless experience on all devices.

## Technology Stack

- React, TypeScript, Redux Toolkit, RTK Query, Tailwind CSS, Keep React

## Prerequisites

- Node.js and npm/yarn installed.
- Any Web browser to view the application

## Installation Steps

Follow this step-by-step guide to run the server on your local machine.

### 0. Prerequisites

- Node.js and npm/yarn installed.
- Any Web browser to view the application.

### 1. Clone the Repository

First, clone the repository to your machine using the following command:

```
git clone https://github.com/saifscripts/ateiler-client
```

### 2. Change Directory

Next, navigate to the project directory with this command:

```
cd ateiler-client
```

### 3. Install Dependencies

Before running the app, you need to install all dependencies. You can do this using either Yarn or npm.

#### Using Yarn

```

yarn install

```

#### Using npm

```

npm install

```

### 4. Add a Configuration File

To run the app, create a `.env` file in the root folder with the following properties (I have included a few demo values here for testing):

```
VITE_BASE_URL=http://localhost:5000
VITE_IMGBB_API_KEY=your_api_key
```

### 5. Run the App

Now, you're ready to run the app. Use one of the following commands to start the server.

#### Using Yarn

```
yarn dev
```

#### Using npm

```
npm run dev
```

That's it! The application should now be running locally.
