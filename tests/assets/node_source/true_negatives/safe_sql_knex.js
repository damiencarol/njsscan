var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'your_database_user',
      password : 'your_database_password',
      database : 'myapp_test'
    }
  });
  
  app.post('/smth', function (req, res) {
      knex.with('with_alias', knex.raw('select * from "books" where "author" = ?', req.body.input )).select('*').from('with_alias')
      knex.raw('select * from "books" where "author" = ?', req.body.input )
  });