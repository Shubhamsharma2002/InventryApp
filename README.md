# 🛒 Inventory Management App (Node.js + Express + EJS)

A simple and clean **Inventory Management Web App** built using **Node.js, Express.js, EJS, and MVC architecture**.  
This project supports **user authentication**, **product management**, **file uploads**, **sessions**, **cookies**, and **custom middleware**.

---

## 🚀 Features

- 🔐 User Authentication (Register + Login + Logout)
- 📦 Add, Edit & Delete Products
- 🖼️ Image Upload using Multer
- ✔️ Validation Middleware
- 🍪 Last Visit Cookie Tracking
- 🧩 Clean MVC Architecture
- 🎨 EJS View Templates with Layouts
- 🛡️ Protected Routes using session-based auth

---

## 🛠️ Tech Stack

| Layer | Technology |
|------|-------------|
| Backend | Node.js, Express.js |
| View Engine | EJS + express-ejs-layouts |
| Middleware | express-session, Multer, cookie-parser |
| Architecture | MVC |
| Styling | CSS (public folder) |

---
--- 

## 🌐 Live Demo

Check out the live version of this app here:  
[https://inventry-app-eight.vercel.app/](https://inventry-app-eight.vercel.app/)

---

## 📁 Folder Structure


``` 

INVENTRYAPP/
│
├── public/
│   ├── css/
│   ├── image/
│   └── js/
│
├── src/
│   ├── controller/
│   │   ├── ProductController.js
│   │   └── UserController.js
│   │
│   ├── Middleware/
│   │   ├── fileUploadMiddleware.js
│   │   ├── lastVisitMiddleware.js
│   │   ├── sessionMiddleware.js
│   │   └── validationMiddleware.js
│   │
│   ├── Model/
│   │   ├── ProductModel.js
│   │   └── UserModel.js
│   │
│   └── View/
│       ├── layout.ejs
│       ├── login.ejs
│       ├── new-product.ejs
│       ├── product.ejs
│       ├── products.css
│       ├── register.ejs
│       └── update-product.ejs
│
├── .gitignore
├── index.js
├── package-lock.json
├── package.json
└── README.md


```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

### 2️⃣ Install Dependencies

### 3️⃣ Start the Server

---

Server will run on:

👉 http://localhost:8000

---

## 📌 Routes Overview

### 🔹 Public Routes

| Method | Route | Description |
|--------|--------|-------------|
| GET | `/` | Show all products |
| GET | `/login` | Login page |
| GET | `/register` | Registration page |
| POST | `/login` | Handle login form |
| POST | `/register` | Handle registration form |

---

### 🔹 Protected Routes (Login Required)

| Method | Route | Description |
|--------|--------|-------------|
| GET | `/addProduct` | Product creation form |
| POST | `/` | Add new product |
| GET | `/upadte/:id` | Edit product page |
| POST | `/upadteProduct` | Update product |
| POST | `/delete/:id` | Delete product |
| GET | `/logout` | Logout user |

---


