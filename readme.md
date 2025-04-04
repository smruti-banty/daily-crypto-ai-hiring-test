# 📚 BookNest  
**Manage Your Library**

## 🧰 Software Requirements
- [Node.js](https://nodejs.org/) – **v22.14.0**

---

## 🚀 How to Run the Project

This project consists of **two separate repositories**:

1. **BookNest Repository** (this one) – Contains:
   - Book API (Backend)
   - Frontend (React)

2. **Auth API Repository** – Authentication Service:  
   🔗 [https://github.com/Daily-Crypto-AI/hiring-task](https://github.com/Daily-Crypto-AI/hiring-task)

---

## 🛠️ Setup Instructions

### 1. Clone the Repositories

```bash
git clone https://github.com/smruti-banty/daily-crypto-ai-hiring-test
git clone https://github.com/Daily-Crypto-AI/hiring-task

## 2. Install Dependencies

Run the following command in **all 3 sub-projects** (Auth API, Book API, and Frontend):

```bash
npm install

### 3. Run the Authentication API

- Navigate to the **Auth API** repository.
- Create a `.env` file and copy the contents from `.env.example`.
- Make sure the server runs on **port 5000** (this is required by the rest of the app).

Start the server by running:

```bash
npm run dev

### 4. Run the Book API

- Navigate to the **BookNest backend** folder (inside this repository).
- Create a `.env` file based on `.env.example`.
- Ensure the server is configured to run on **port 5001**.

Start the server by running:

```bash
npm run dev

### 5. Run the Frontend

- Navigate to the **frontend** folder (inside this repository).
- Start the React app by running:

```bash
npm run dev

Visit the app at 👉 [http://localhost:5173](http://localhost:5173)
