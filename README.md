# 📚 Student Data CRUD App

A simple **CRUD (Create, Read, Update, Delete)** web application for managing student records.  
Built with **React + Vite** for the frontend and **JSON Server** for simulating a backend.  

## 🚀 Features
- ➕ Add new student records  
- 📖 View all students  
- ✏️ Edit existing student details  
- ❌ Delete student records  
- 📂 Data stored in `db.json` using JSON Server  

## 🛠️ Tech Stack
- **Frontend:** React, Vite, JavaScript  
- **Backend (Mock API):** JSON Server  
- **Styling:** CSS  

## 📦 Installation & Setup

### 1. Clone the repository
- Run the following commands:  
  ```bash
  git clone https://github.com/your-username/CRUD.git
  cd CRUD/studentdata
  ```

### 2. Install dependencies
- Install required packages:  
  ```bash
  npm install
  ```

### 3. Run JSON Server (mock backend)
- Start backend at port `8000`:  
  ```bash
  npx json-server --watch db.json --port 8000
  ```

### 4. Start the frontend
- Run the dev server:  
  ```bash
  npm run dev
  ```

### 5. Open your browser
- Go to 👉 [http://localhost:5173](http://localhost:5173)  

## 📂 Project Structure
```
CRUD/
└── studentdata/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── db.json          # Mock backend data
    ├── src/             # React components & logic
    └── dist/            # Production build
```

## ✨ Future Improvements
- 🔍 Search & filter students  
- 📊 Pagination support  
- 🎨 Improved UI with Tailwind or Material UI  
