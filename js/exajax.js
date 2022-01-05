var request = require('ajax-request');
const { json } = require('stream/consumers');

request({
  url: 'http://127.0.0.1:5500/people.json',
  method: 'GET'
}, function(err, res, body) {
 
 var o  = JSON.parse(body);
    console.log(o.name);
   
});