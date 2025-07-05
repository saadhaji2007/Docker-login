const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'index.html'))); // Serve static files from 'public' directory

// MongoDB connection
const uri = "mongodb://saad:docker2025@localhost:27017/?authSource=admin";
const client = new MongoClient(uri);
let db;

// Connect to DB once
client.connect()
  .then(() => {
    console.log("Connected successfully to MongoDB");
    db = client.db("userdb");
  })
  .catch(err => console.error("MongoDB connection error:", err));

// Serve HTML form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html")); // make sure index.html exists here
});

// Get all users
app.get("/getUsers", async (req, res) => {
  try {
    const users = await db.collection('users').find({}).toArray();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching users");
  }
});

// Add new user
app.post("/addUsers", async (req, res) => {
  const userObj = req.body;
  try {
    const result = await db.collection('users').insertOne(userObj);
    console.log("User inserted:", result.insertedId);
    res.send(`<h3>User added successfully!</h3><a href="/getUsers">View Users</a>`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error inserting user");
  }
});

// Start server
app.listen(3002, () => {
  console.log(`Server running at http://localhost:3002`);
});
