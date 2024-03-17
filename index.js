const express = require("express");
const cors = require("cors");
const { getData } = require("./crud");

const app = express();
const port = 3001; // Adjust port number as needed

// Express middleware for handling JSON data
app.use(express.json());

app.use(cors());

// Error handling middleware (consider a more robust error handling mechanism)
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging
  res.status(500).json({ error: "Internal server error" });
});

app.get("/", (req, res) => {
  console.log("welcome to the duas server!");
  res.status(200).json({ msg: "welcome to the duas server!" });
});

// Route to retrieve categories
app.get("/categories", async (req, res) => {
  const tableName = "category";

  try {
    const categories = await getData(tableName);
    // Send the retrieved data as JSON response
    res.json(categories);
  } catch (err) {
    console.error("Error fetching data:", err.message);
    res.status(500).json({ error: "Error fetching categories" });
  }
});
// Route to retrieve categories
app.get("/sub-category", async (req, res) => {
  const tableName = "sub_category";

  try {
    const categories = await getData(tableName);
    // Send the retrieved data as JSON response
    res.json(categories);
  } catch (err) {
    console.error("Error fetching data:", err.message);
    res.status(500).json({ error: "Error fetching categories" });
  }
});
// Route to retrieve categories
app.get("/duas", async (req, res) => {
  const tableName = "dua";

  try {
    const categories = await getData(tableName);
    // Send the retrieved data as JSON response
    res.json(categories);
  } catch (err) {
    console.error("Error fetching data:", err.message);
    res.status(500).json({ error: "Error fetching categories" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
