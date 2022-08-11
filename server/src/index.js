const express = require('express');
const api = require('./api');
const app = express();
const PORT = 3001;

const bodyParser = require('body-parser');
const cors = require('cors');

// const corsOptions ={
//  origin:'*', 
//  credentials:true,            //access-control-allow-credentials:true
// }

app.get('/', (req, res) => {
 res.json({
  message: "Welcome to Scylla"
 })
})

app.use(cors());
app.use(bodyParser.json());
app.use('/api', api);

app.listen(PORT, () => {
 console.log(`Listening to http://localhost:${PORT}`)
});