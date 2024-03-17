const sqlite3 = require("sqlite3").verbose();
const dbName = "./dua_main.sqlite";

let db = new sqlite3.Database(dbName, (err) => {
  if (err) {
    console.error("Database connection error:", err.message);
    // Handle error appropriately (e.g., throw an exception or exit the application)
  } else {
    console.log("Connection established to SQLite database");
  }
});

module.exports = db;
