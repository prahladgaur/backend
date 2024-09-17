const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Enable CORS for cross-origin requests
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

app.use(
    cors({
      origin: ["https://test-livid-seven-65.vercel.app"],
      methods: ['GET', 'POST', 'DELETE', 'PUT'],
      credentials: true,
    })
  );

// API route to handle form submission
app.post("/submit", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).json({ message: `Hello, ${name}! Welcome to the platform.` });
  } else {
    res.status(400).json({ message: "Please provide a name." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
