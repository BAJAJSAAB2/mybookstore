
# 📚 Book Management System

A web-based Book Management System built with **Node.js**, **Express**, **Handlebars**, **MongoDB**, and authentication using **Google OAuth** and **local strategy**.

## 🚀 Features
- 📖 Manage your books (Add, View, Delete).
- 🔒 Authentication via:
  - Google OAuth
  - Local Email/Password.
- 🛡️ Secure user data with hashed passwords.
- 🖼️ Handlebars templating for dynamic views.

## 🛠️ Technologies Used
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: Passport.js (Google OAuth, Local Strategy)
- **Templating Engine**: Handlebars (HBS)

## ⚙️ Installation

1. Clone the repository:
   ```bash
   https://github.com/BAJAJSAAB2/mybookstore.git
   cd book-management-system
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and add the following:
   ```env
   MONGO_URI=mongodb://localhost:27017/book-management
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   ```

4. Start the server:
   ```bash
   node app.js
   ```

5. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## 📁 Project Structure
```plaintext
book-management-system/
├── models/
│   ├── User.js           # User schema
│   ├── Book.js           # Book schema
├── routes/
│   ├── auth.js           # Authentication routes
│   ├── book.js           # Book management routes
│   ├── index.js          # Home page route
├── views/                # Handlebars templates
│   ├── layout.hbs        # Main layout
│   ├── home.hbs          # Homepage
│   ├── login.hbs         # Login page
│   ├── books.hbs         # Book list page
├── .env                  # Environment variables
├── app.js                # Main application file
├── package.json          # Project metadata
```
