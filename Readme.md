# Node.js + Express + MongoDB CRUD API

A RESTful CRUD API built using **Node.js, Express.js, and MongoDB Atlas**. This project demonstrates how to create, retrieve, update, and delete records using REST API endpoints and Mongoose.

## 1. Project Overview

This project is a backend application developed to understand and implement CRUD (Create, Read, Update, Delete) operations.

It uses an inventory management system as an example, where users can manage items by storing information such as item name, description, category, price, and stock availability.

### Objectives

- Set up a backend server using Node.js and Express.js.
- Connect the application to MongoDB Atlas.
- Define database schemas and models using Mongoose.
- Implement RESTful API endpoints.
- Perform CRUD operations on database records.
- Test API endpoints using Postman.

## 2. Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime environment |
| Express.js | Backend web framework |
| MongoDB Atlas | Cloud-hosted NoSQL database |
| Mongoose | MongoDB object modeling library |
| dotenv | Environment variable management |
| CORS | Cross-Origin Resource Sharing |
| Nodemon | Automatic server restarting during development |
| Postman | API testing |

## 3. Project Structure

```text
Node-MongoDB-CRUD-API/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── itemController.js
│
├── models/
│   └── Item.js
│
├── routes/
│   └── itemRoutes.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

### Folder and File Description

- **config/db.js:** Establishes the connection between the application and MongoDB Atlas.
- **controllers/itemController.js:** Contains the logic for all CRUD operations.
- **models/Item.js:** Defines the Item schema and its validation rules using Mongoose.
- **routes/itemRoutes.js:** Defines API routes and connects them to controller functions.
- **server.js:** Initializes Express, configures middleware, connects the database, and starts the server.
- **.env:** Stores environment variables and database connection credentials.
- **.gitignore:** Prevents sensitive and unnecessary files from being uploaded to GitHub.

## 4. Installation and Setup

### Prerequisites

Make sure the following are installed:

- Node.js
- npm
- MongoDB Atlas account
- Postman (for API testing)
- Git

### Step 1: Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate into the project directory:

```bash
cd Node-MongoDB-CRUD-API
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Configure Environment Variables

Create a `.env` file in the root directory.

Add the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your MongoDB Atlas connection string.

**Important:** Never upload your `.env` file or expose your MongoDB credentials publicly.

### Step 4: Start the Server

For development:

```bash
npm run dev
```

For production:

```bash
npm start
```

The server will run at:

```text
http://localhost:5000
```

If the connection is successful, the terminal will display:

```text
MongoDB Connected: <your-cluster-host>
Server running on port 5000
```

## 5. API Endpoints

Base URL:

```text
http://localhost:5000/api/items
```

The application provides five main API operations.

| Operation | HTTP Method | Endpoint |
|---|---|---|
| Create an item | POST | `/api/items` |
| Get all items | GET | `/api/items` |
| Get an item by ID | GET | `/api/items/:id` |
| Update an item | PUT | `/api/items/:id` |
| Delete an item | DELETE | `/api/items/:id` |

### 5.1 Create an Item

**Method:** POST

**Endpoint:**

```text
/api/items
```

**Request Body:**

```json
{
    "name": "Gaming Laptop",
    "description": "Laptop for gaming and programming",
    "category": "Electronics",
    "price": 65000,
    "inStock": true
}
```

**Expected Response:** HTTP 201 Created

Creates a new item in the MongoDB database and returns the saved document.

### 5.2 Get All Items

**Method:** GET

**Endpoint:**

```text
/api/items
```

Retrieves all available items from the database.

**Expected Response:** HTTP 200 OK

### 5.3 Get an Item by ID

**Method:** GET

**Endpoint:**

```text
/api/items/:id
```

Example:

```text
/api/items/65f123abc456def789012345
```

Retrieves a specific item using its MongoDB ObjectId.

**Expected Response:** HTTP 200 OK

If the item does not exist, the API returns HTTP 404 Not Found.

### 5.4 Update an Item

**Method:** PUT

**Endpoint:**

```text
/api/items/:id
```

**Request Body:**

```json
{
    "name": "Gaming Laptop Updated",
    "description": "Updated laptop for gaming and AI development",
    "category": "Electronics",
    "price": 70000,
    "inStock": true
}
```

Updates an existing item using its MongoDB ObjectId.

**Expected Response:** HTTP 200 OK

### 5.5 Delete an Item

**Method:** DELETE

**Endpoint:**

```text
/api/items/:id
```

Deletes an existing item from the database using its MongoDB ObjectId.

**Expected Response:** HTTP 200 OK

If the item does not exist, the API returns HTTP 404 Not Found.

## 6. Item Schema

The application uses a Mongoose schema to define the structure of each item.

| Field | Data Type | Validation / Default |
|---|---|---|
| `_id` | ObjectId | Automatically generated |
| `name` | String | Required |
| `description` | String | Required |
| `category` | String | Required |
| `price` | Number | Required, minimum value 0 |
| `inStock` | Boolean | Default: true |
| `createdAt` | Date | Automatically generated |
| `updatedAt` | Date | Automatically generated |

The schema uses Mongoose's `timestamps` option to automatically maintain creation and update dates.

## 7. HTTP Status Codes

| Status Code | Description |
|---|---|
| 200 | Request completed successfully |
| 201 | Resource created successfully |
| 400 | Invalid request or input |
| 404 | Requested item not found |
| 500 | Internal server error |

## 8. Testing

All API endpoints were tested using **Postman**.

The following operations were performed:

1. Created new inventory items using POST.
2. Retrieved all stored items using GET.
3. Retrieved individual items using their IDs.
4. Updated item details using PUT.
5. Deleted items using DELETE.
6. Verified that deleted items returned a 404 response when requested again.
7. Checked the stored records in MongoDB Atlas.

## 9. Key Concepts Implemented

Through this project, the following concepts were implemented:

- Node.js modules and ES6 import/export syntax.
- Express server configuration and middleware.
- REST API development.
- Express Router for organizing endpoints.
- Mongoose schemas and models.
- MongoDB Atlas database connectivity.
- Asynchronous JavaScript using `async` and `await`.
- Error handling using `try...catch`.
- HTTP request and response handling.
- CRUD operations.
- Environment variable management.
- API testing using Postman.

## 10. Future Improvements

Potential improvements include:

- Implementing user authentication and authorization.
- Adding pagination and search functionality.
- Implementing advanced filtering and sorting.
- Adding centralized error-handling middleware.
- Improving request validation.
- Deploying the API to a cloud hosting platform.

## 11. Author

**Project:** Node.js + Express + MongoDB CRUD API

**Developer:** Achal Tyagi

**Purpose:** Web Development Assignment

---

*This project was developed as a practical implementation of backend development concepts using Node.js, Express.js, MongoDB Atlas, and Mongoose.*