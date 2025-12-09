# Hackathon MERN Project 🚀


## Overview
This is a **MERN stack (MongoDB, Express, React, Node.js) web application** created for a hackathon project.  
It includes **user authentication**, **protected routes**, and a **dashboard** for registered users.  

---

## Features
- User Registration and Login with JWT authentication  
- Passwords encrypted with Bcrypt  
- Protected Dashboard accessible only to logged-in users  
- CRUD functionality (basic for demonstration)  
- Responsive frontend using React  

---

## Tech Stack
- **Frontend:** React, React-Bootstrap / Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT (JSON Web Token)  
- **Security:** Bcrypt password hashing  

---

## Folder Structure

```

hackathon-project/
├── client/
│   ├── package.json
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── index.js
│       ├── App.js
│       └── pages/
│           ├── Login.js
│           ├── Register.js
│           └── Dashboard.js
├── server/
│   ├── index.js
│   ├── routes/
│   │   └── auth.js
│   ├── models/
│   │   └── User.js
│   └── package.json
└── README.md

````

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/AdiJoshi156/Hackthon_Project.git
cd Hackthon_Project
````

### 2. Backend Setup

```bash
cd server
npm install
npm run dev
```



### 3. Frontend Setup

```bash
cd client
npm install
npm start
```



---

## How to Use

1. Go to **Register** page → create a new account
2. Go to **Login** page → enter your credentials
3. Access the **Dashboard** → only accessible if logged in
4. Explore CRUD operations (if implemented)

---

## Future Improvements

* Integrate **full CRUD for dashboard items**
* Add **file uploads** and media handling
* Implement **role-based access control**
* Add **unit tests and E2E tests**

---

