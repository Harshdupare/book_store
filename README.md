Book Store Project
This project is a Book Store application that allows users to perform CRUD (Create, Read, Update, Delete) operations on a collection of books. It utilizes React.js for the frontend and Node.js with MongoDB and Mongoose for the backend.

Features
Create: Users can add new books to the store by providing book details such as title, author, genre, etc.
Read: Users can view a list of all books available in the store with their details.
Update: Users can edit existing book details including title, author, genre, etc.
Delete: Users can remove books from the store.


Tech Stack
Frontend: React.js
Backend: Node.js
Database: MongoDB
ODM (Object Data Modeling): Mongoose

Setup Instructions
Follow these steps to set up and run the project locally:

Clone the Repository: 
git clone (https://github.com/Harshdupare/book_store.git)

Navigate to the Project Directory:
cd book-store

Install Dependencies:
    For Frontend:
        cd frontend
        npm install
    For Backend:
        cd backend
        npm install

Set Up Environment Variables:
Create a .env file in the backend directory.
Define environment variables such as MONGODB_URI for MongoDB connection string.

Start the Development Servers:
    For Frontend:
        cd frontend
        npm start
    For Backend:
        cd backend
        npm start
