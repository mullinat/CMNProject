var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'cmn',
  password : '3.141IdoNotLikePie',
  database : 'CMNProject'
});

connection.connect();

connection.query('SELECT * from LiveChat', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});


connection.end();
