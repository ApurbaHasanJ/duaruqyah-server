const db = require('./database'); // Import database connection

// Function to retrieve categories 
function getCategories(tableName) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM ${tableName}`;
      db.all(query, (err, rows) => {
        if (err) {
          reject(err); // Reject the promise on error
        } else {
          resolve(rows); // Resolve the promise with the data
        }
      });
    });
  }
// Function to retrieve categories 
function getData(tableName) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM ${tableName}`;
      db.all(query, (err, rows) => {
        if (err) {
          reject(err); // Reject the promise on error
        } else {
          resolve(rows); // Resolve the promise with the data
        }
      });
    });
  }
  
  module.exports = { getData };