
const express = require('express')
const {Client} =require('pg')
const bodyParser = require('body-parser');
const pool = require('./db'); 
const port = 3001
const client = new Client({
    connectionString: "postgresql://kalpit.bhanawat99:syN8Ir1kzQWA@ep-super-shape-86209005.us-east-2.aws.neon.tech/AKV?sslmode=require"
})
//  app.get('/', async (req, res) => {
//     await client.connect()
//     const result = await client.query(`
//     CREATE TABLE users (
//         id SERIAL PRIMARY KEY,
//         email VARCHAR(255) UNIQUE NOT NULL,
//         password VARCHAR(255) NOT NULL
//       );
//     `
//     )
//     console.log(result)
// })
const app = express()
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.get('/get-data', async (req, res) => {
    try {
        
        const result = await pool.query(`
            SELECT * from Users;
            `
        )
        console.log(result)
        res.json(result);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})