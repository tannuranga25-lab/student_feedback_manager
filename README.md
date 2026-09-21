
# StudentVoice 🎓

StudentVoice is a full-stack student feedback platform that allows students to share their experiences, submit a 1–5 star rating, and view feedback submitted by other students.

The project is built with a focus on understanding how a frontend, REST API, backend, and database work together in a real-world application.

## Features

- Submit student feedback
- Interactive 1–5 star rating
- Store feedback in MongoDB
- Retrieve feedback through REST API
- Dedicated feedback page
- Mongoose schema validation
- Responsive user interface
- Collaboration form for sharing ideas and collaboration opportunities

## Tech Stack

**Frontend**
- HTML5
- CSS3
- JavaScript
- Fetch API

**Backend**
- Node.js
- Express.js
- REST API

**Database**
- MongoDB
- MongoDB Atlas
- Mongoose

**Tools & Utilities**
- CORS
- dotenv
- Git
- GitHub

## Project Structure

```text
studentvoice/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   │   └── feedback.controller.js
│   │   ├── models/
│   │   │   └── feedback.model.js
│   │   ├── routes/
│   │   │   └── feedback.routes.js
│   │   ├── middleware/
│   │   │   └── error.middleware.js
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── .env
│   ├── .gitignore
│   └── package.json
│
└── frontend/
    ├── index.html
    ├── feedback.html
    ├── css/
    │   └── style.css
    └── js/
        ├── script.js
        └── feedback.js
````

## Application Flow

### Submit Feedback

```text
Student
   ↓
Feedback Form
   ↓
JavaScript / Fetch API
   ↓
POST /api/feedback
   ↓
Express Route
   ↓
Controller
   ↓
Mongoose Model
   ↓
MongoDB
```

### View Feedback

```text
Feedback Page
   ↓
GET /api/feedback
   ↓
Express Route
   ↓
Controller
   ↓
Mongoose
   ↓
MongoDB
   ↓
JSON Response
   ↓
JavaScript
   ↓
Feedback Cards
```

## API Endpoints

### Create Feedback

```http
POST /api/feedback
```

Example request:

```json
{
  "studentName": "Tannu",
  "rating": 5,
  "message": "Great learning experience."
}
```

### Get Feedback

```http
GET /api/feedback
```

Returns the feedback stored in MongoDB.

## Data Model

The application currently uses a `feedbacks` collection.

```text
Feedback
├── studentName
├── rating
└── message
```

Example document:

```json
{
  "studentName": "Tannu",
  "rating": 5,
  "message": "Great learning experience."
}
```

The Mongoose schema validates the feedback data before it is stored in the database.

## Getting Started

### Prerequisites

* Node.js
* MongoDB Atlas account
* Git

### Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate to the backend:

```bash
cd studentvoice/backend
```

Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file inside the `backend` directory:

```env
PORT=7000
MONGODB_URI=your_mongodb_connection_string
```

Do not commit `.env` or any database credentials to GitHub.

### Run the Backend

```bash
npm run dev
```

Open the frontend using a local development server such as VS Code Live Server.

## What This Project Demonstrates

* Frontend and backend integration
* REST API fundamentals
* Express routing
* Controllers and middleware
* Request and response handling
* Async/await
* Fetch API
* MongoDB database operations
* Mongoose schemas and models
* Data validation
* MongoDB Atlas
* Environment variables
* CORS
* Basic full-stack application architecture
* Responsive UI development

## Future Improvements

* User authentication
* Student profiles
* Project sharing
* Collaboration requests
* Search and filtering
* Feedback analytics
* Admin dashboard
* Deployment

## Project Status

**In Development 🚧**

The core feedback functionality is implemented, including feedback submission, MongoDB storage, REST API integration, and feedback retrieval.

## Author

**Tannu Ranga**

Student & Full Stack Developer

Interested in Full-Stack Development, AI, Automation, and Product Engineering.

