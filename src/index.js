const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const events = require('./events');

const db_config = {
  connectionLimit : 10,
  host     : '****',
  user     : '****',
  password : '****',
  database : '****',
  port     :  3306
}
let connection = mysql.createPool(db_config);

const port = process.env.PORT || 8080;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(events(connection));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});