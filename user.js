const pg = require('pg');
var dateFormat = require('dateformat');
var time = require('time')(Date);

const config = {
  user: 'lfgygpstcvjdxq',
  password: 'a63c3ae2cd91549bd10213043cda0acae643c92b92321e52a4936b9bf0962f03',
  host: 'ec2-54-225-230-142.compute-1.amazonaws.com',
  port: 5432,
  database: 'd386o1e8kv0a3h',
  ssl: true
};
const client = new pg.Client(config);
client.connect()

module.exports = {

   register: function(first,accept,mealchoice,resb,callback) {
   var now = new Date();
   var date=dateFormat(now, "yyyy-mm-dd HH:MM:ss");
   query = {
     text: 'INSERT INTO users(first,accepted,mealchoice,datetimeCreated) VALUES($1, $2,$3,$4)',
     values: [first, accept,mealchoice,date],
  }
   client.query(query, (err, res) => {
     if (err) {
       console.log(err.stack)
     } else {
       console.log(res.rows[0])
     }
   })
      data={};
      data.response="SUCCESS";

   callback(null,data,resb);
   }
}
