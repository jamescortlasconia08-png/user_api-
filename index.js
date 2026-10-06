const express = require('express');
const cors = require('cors');

const app = express();
// Render automatically assigns a PORT environment variable
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Mock user dataset matching required schema
const users = [
  {
    LastName: "Mercer",
    FirstName: "Alex",
    Email: "alex.mercer@example.com",
    Password: "$2a$12$eImiTXuWVxfM37uY4JANjO5E/1539.y.91u..." 
  },
  {
    LastName: "Chen",
    FirstName: "Sophia",
    Email: "sophia.chen@example.com",
    Password: "$2a$12$uJ81hG.xO37.mockhashpass..." 
  },
  {
    LastName: "Miller",
    FirstName: "David",
    Email: "david.miller@example.com",
    Password: "$2a$12$P08.mockhashpass..." 
  }
];

// Root health-check endpoint
app.get('/', (req, res) => {
  res.json({
    status: "online",
    message: "Users API is running.",
    endpoint: "/api/users"
  });
});

// GET /api/users - Returns list of users
app.get('/api/users', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(users);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
