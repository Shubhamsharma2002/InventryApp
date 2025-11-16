# 🛒 Product Management App (Node.js + Express + EJS)

A simple **Product Management Web App** built using **Node.js, Express, EJS**, and MVC architecture.  
This project includes **authentication**, **file upload**, **sessions**, **cookies**, and custom middleware.

---

## 🚀 Features

- User Registration & Login (Session-based Authentication)
- Add, Update & Delete Products
- File Upload using Multer
- Form Validation Middleware
- Cookie Tracking (Last Visit)
- MVC Folder Architecture
- EJS Templates with Layout Support
- Protected Routes with `auth` Middleware

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **EJS (View Engine)**
- **express-ejs-layouts**
- **Multer (File Upload)**
- **express-session**
- **cookie-parser**

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