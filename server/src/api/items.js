const express = require('express')
const cassandra = require('cassandra-driver');
require('dotenv').config();

const { REACT_APP_NODE1_IP, REACT_APP_DATA_CENTER, REACT_APP_USERNAME, REACT_APP_PASSWORD, REACT_APP_ITEMS_KEYSPACE } = process.env;

const cluster = new cassandra.Client({
 contactPoints: [REACT_APP_NODE1_IP],
 localDataCenter: REACT_APP_DATA_CENTER,
 credentials: {username: REACT_APP_USERNAME, password: REACT_APP_PASSWORD},
 keyspace: REACT_APP_ITEMS_KEYSPACE,
});
const router = express.Router();


//Get all items
router.get('/', async (req, res) => {
 const result = await cluster.execute('SELECT * FROM items');
 res.json({ items: result.rows });
});

//Create one item
router.post('/', (req, res) => {
 const {name} = req.body;
 const query = 'INSERT INTO items(id, name, completed) VALUES (uuid(), ?, ?)';
 const result = cluster.execute(query, [name, false]);
 res.status(200).send({id, result});
})

//Delete one item
router.delete('/:id', async (req, res) => {
 const { id } = req.params;
 const query = 'DELETE FROM items WHERE id=?';
 await cluster.execute(query, [id]);
 res.status(200).send();
})

module.exports = router;