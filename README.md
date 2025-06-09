# Dummy LMS CRUD Project

**A hands‑on Learning Management System (LMS) demo** built to showcase:

* Full CRUD operations for Students and Instructors
* Course and enrollment management
* Modular landing page for prospective users
* Admin dashboard for course, user, and content control

This dummy project uses:

* **Node.js** and **Express.js** for the server
* **MySQL** as the relational database
* **Knex.js** as a flexible SQL query builder and migration tool

*Current status:*

* Core LMS CRUD (students, instructors, courses) – **Complete**
* Landing page – **In progress**
* Admin side – **Planned**
  **Stay tuned** as more features roll out!

---

## 📋 Prerequisites

* **Node.js** v14 or later
* **npm** or **Yarn**
* **MySQL** server running
* (Optional) **Knex CLI** globally installed:

  ```bash
  npm install -g knex
  ```

---

## ⚙️ Installation

1. **Clone repository**

   ```bash
   git clone https://github.com/YourUser/your-lms-project.git
   cd your-lms-project
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment variables**

   * Copy `.env.example` to `.env`
   * Populate with your database credentials:

     ```dotenv
     NODE_ENV=development
     PORT=3000
     ```

---

## 🗄️ Database Setup with Knex

### Run Migrations

If **Knex CLI** is installed globally:

```bash
knex migrate:latest --env development
```

Otherwise, use `npx`:

```bash
npx knex migrate:latest --env development
```

### Run Seeders

```bash
knex seed:run --env development
# or
npx knex seed:run --env development
```

> ✔️ Ensure `knexfile.js` points to `./src/migrations` and `./src/seeders` folders.

---

## 🚀 Running the Server

* **Development (auto-reload)**

  ```bash
  npm run dev
  ```
* **Production**

  ```bash
  npm start
  ```

Default port is set via `.env` (fallback to `3000`).

---

## 🔧 Scripts in `package.json`

```json
"scripts": {
  "start": "node src/index.js",
  "dev": "nodemon src/index.js",
  "migrate": "knex migrate:latest --env development",
  "rollback": "knex migrate:rollback --env development",
  "seed": "knex seed:run --env development"
}
```

---

## 🗂️ Project Structure

```
your-lms-project/
├── src/
│   ├── migrations/
│   ├── seeders/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── app.js
│   └── index.js
├── knexfile.js
├── package.json
└── .env.example
```

---

## 🤝 Contributing

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit changes: \`git commit -m "Add feature"
4. Push branch: `git push origin feature/your-feature`
5. Open a PR and describe your changes.

---

## 📄 License

This project is licensed under the MIT License.
