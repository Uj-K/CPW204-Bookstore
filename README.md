# 📚 CPW204 Bookstore Console & Web App

This project is a hybrid C# console and HTML/JavaScript web application designed to simulate a basic bookstore system. Developed during the CPW204 course, it showcases core programming skills in object-oriented design, file I/O, and interactive form handling using modern web technologies.

---

## 🎯 Project Objectives

- Build a menu-driven **C# console application** to manage book inventory
- Create a **web-based form (book.html)** to simulate book entry and client-side display
- Practice **Object-Oriented Programming (OOP)** and **DOM manipulation**
- Use **file-based storage** to persist inventory data

---

## 💻 Tech Stack

| Technology | Purpose |
|------------|---------|
| **C# (.NET Core)** | Backend console logic |
| **HTML5 / CSS / JavaScript** | Web UI (book.html) |
| **Bootstrap 5** | UI layout and styling |
| **File I/O (TXT)** | Book data storage |
| **DOM Manipulation (JS)** | Dynamic rendering of book entries |
| **GitHub Pages** | Project hosting and live demo |

---

## 🧩 Features

### Console App (Program.cs)
- 📖 View available books
- ➕ Add new books (title, author, price, quantity)
- 🔍 Search by title or author
- 🛒 Simulate purchase with quantity update
- 💾 Load/save book list via text file

### Web App (book.html + main.js)
- 📋 Interactive book form with fields:
  - ISBN
  - Title
  - Price
  - Release Date
- ✅ Inline validation with styled error messages
- 🧠 JavaScript logic adds book data to a live list on the page
- 📱 Responsive styling using Bootstrap

---

## 🌐 Live Demo

👉 [https://uj-k.github.io/CPW204-Bookstore/book.html](https://uj-k.github.io/CPW204-Bookstore/book.html)

Use the pre-filled form values to quickly test adding a book entry!

---

## 📘 About `book.html`

The `book.html` file provides a standalone front-end form for submitting books without a database or server.

- **Bootstrap 5** used for layout and styling
- **Form validation** is handled via inline JavaScript
- **Pre-filled demo values** (e.g., *The Vegetarian*, ISBN: *9781101906118*) included for testing
- All books submitted via the form are displayed dynamically on the page



