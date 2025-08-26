# 📚 Student Data CRUD App

This is a simple **CRUD (Create, Read, Update, Delete)** web application for managing student records.  
It is built using **Vite + JavaScript/React** for the frontend and **JSON Server** for simulating a backend.

---

## 🚀 Features
- ➕ Add new student records  
- 📖 View all students  
- ✏️ Edit existing student details  
- ❌ Delete student records  
- 📂 Data is stored in `db.json` using JSON Server  

---

## 🛠️ Tech Stack
- **Frontend:** Vite, JavaScript/React  
- **Backend (Mock API):** JSON Server  
- **Styling:** CSS  

---

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/CRUD.git
   cd CRUD/studentdata

## Install dependencies

```bash  
npm install Run JSON Server (for mock backend)
```

``` bash 
 npx json-server --watch db.json --port 3001 (Start the frontend)
 ```

``` bash 
 npm run dev (Open your browser at):
```

```arduino
 http://localhost:5173 
 ```
 ## 📂 Project Structure 
 ```bash  
CRUD/
 └── studentdata/
     ├── index.html
     ├── package.json
     ├── vite.config.js
     ├── db.json          # Mock backend data
     ├── src/             # React/JS code (components, pages, etc.)
     └── dist/            # Production build
```
