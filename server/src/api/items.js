const express = require('express')

const cassandra = require('cassandra-driver');

const cluster = new cassandra.Client({
 contactPoints: ["18.136.48.249", "13.250.170.57", "3.0.39.173"],
 localDataCenter: 'AWS_AP_SOUTHEAST_1',
 credentials: {username: 'scylla', password: 'oQerXKSIA3O25uW'},
 keyspace: 'todos'
});
const router = express.Router();

// const items = [
//  {id: "1", name: "Buy groceries", completed: "false"},
// ]

router.get('/', async (req, res) => {
 const result = await cluster.execute('SELECT * FROM items');
 res.json(result.rows);
});

module.exports = router;