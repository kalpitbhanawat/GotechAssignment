
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

app.delete('/items/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      // Replace this with your actual database query to delete the item
      // Example with a fictional database client
      const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
  
      if (result.rowCount === 0) {
        return res.status(404).json({ message: 'Item not found' });
      }
  
      res.status(200).json({ message: 'Item deleted successfully', item: result.rows[0] });
    } catch (error) {
      console.error('Error deleting item:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.post('/users', async (req, res) => {
  const {email,username,sentmails,activitytime,activitystate}=req.body;
    try {
      const result = await pool.query(
        'INSERT INTO users(username ,email,sentmails,activitytime,activitystate) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [username, email,sentmails,activitytime,activitystate]
      );
  
      const newItem = result.rows[0];
      res.status(201).json(newItem);
    } catch (error) {
      console.error('Error inserting data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

//   UPDATE cars
// SET color = 'red'
// WHERE brand = 'Volvo';
app.put('/users', async (req, res) => {
    const {email,username,sentmails,activitytime,activitystate,id}=req.body;
      try {
        const result = await pool.query(
          'UPDATE users SET username=`$1`,email=`$2`,sentmails=`$3`,activitytime=`$4`,activitystate=`$5` WHERE id=$6',
          [username, email,sentmails,activitytime,activitystate,id]
        );
    
        const newItem = result.rows[0];
        res.status(201).json(newItem);
      } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
    });
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})