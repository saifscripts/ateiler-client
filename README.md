# Ateiler || Sporting Goods E-commerce Platform

### [Live URL (Client)](https://ateiler-alpha.vercel.app)

### [Live URL (Server)](ateiler-server.vercel.app)

## Introduction

Welcome to Ateiler, your one-stop shop for a wide range of sporting equipment and accessories. This platform offers an intuitive interface for both customers and administrators, streamlining the shopping and product management experience.

## Project Description

This project is a comprehensive e-commerce website designed for a sporting goods business. It features a robust set of functionalities including product browsing, detailed product views, cart management, checkout processes, and an admin interface for managing products.

## Features

- Comprehensive product browsing and filtering.
- Detailed product views with add to cart functionality.
- Efficient cart management with quantity adjustments and total price calculation.
- Seamless checkout process with Cash on Delivery.
- Admin interface for adding, updating, and deleting products.

## Technology Stack

- React, Redux, RTK Query, React Router, TypeScript

## Installation Guideline

Follow this step-by-step guide to run the server on your local machine.

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

### 4. Add a .env File

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
