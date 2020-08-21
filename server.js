const express = require('express');
const mysqlssh = require('mysql-ssh');
const fs = require('fs');

const config = require('./config_file');
let conf = config.get();

const app = express();

console.log("=======================================================================================");

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

app.get('/api/gamblers', (req, res) => {
  
  sqlQuery('SELECT * FROM `gambler`')
  .then(results => {
    results = results.map(v => Object.assign({}, v));
    res.json(results);
  });

});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);

async function sqlQuery (query) {

  let promise = new Promise((resolve, reject) => {
    mysqlssh.connect(
      {
          host: conf.host,
          user: conf.user,
          privateKey: fs.readFileSync(conf.keyfile)
      },
      {
          host: conf.sql_host,
          user: conf.sql_user,
          password: conf.sql_password,
          database: conf.sql_db
      }
    )
    .then(client => {
      
        client.query(query, function (err, results, fields) {
            if (err) throw err
            //console.log(results);
            mysqlssh.close();
            resolve(results);
        })
    })
    .catch(err => {
        console.log(err)
    })
  });

  let result = await promise;

  return result;

}