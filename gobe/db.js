const { Pool } = require('pg');

// Create a new pool instance
const pool = new Pool({
  user: 'kalpit.bhanawat99',        // Replace with your Neon DB username
  host: 'ep-super-shape-86209005.us-east-2.aws.neon.tech',            // Replace with your Neon DB host
  database: 'AKV',    // Replace with your Neon DB database name
  password: 'syN8Ir1kzQWA',    // Replace with your Neon DB password
  port: 5432,  
  ssl: {
    rejectUnauthorized: false // Change to true if you have a trusted CA certificate
  }                // Default PostgreSQL port
});

module.exports = pool;


// postgresql://kalpit.bhanawat99:syN8Ir1kzQWA@ep-super-shape-86209005.us-east-2.aws.neon.tech/AKV?sslmode=require"