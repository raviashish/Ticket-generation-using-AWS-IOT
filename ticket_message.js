'use strict'; 
exports.handler = (event, context, callback) => { 
   console.log('Received event:', event.clickType); 
var request = require('request'); 
    const single = ['LOW'];
    const double = ['MEDIUM'];
    const thrice = ['HIGH'];
var options = { 
 uri: 'https://YourSiteHere/rest/api/latest/issue/', // write your database site name here
 method: 'POST', 
 auth: { 
       username: 'YourUserName', 
       password: 'YourPassword' 
   }, 
    var singleClick = single[Math.floor(Math.random()*single.length)];
    var doubleClick = double[Math.floor(Math.random()*double.length)];
    var longClick   = thrice[Math.floor(Math.random()*thrice.length)];
    var randomMessage = singleClick;
    
    if(event.clickType == "DOUBLE"){
        randomMessage = doubleClick;
    }
    if(event.clickType == "LONG"){
        randomMessage = longClick;
    } 
request(options, function (error, response, body) { 
 if (!error && response.statusCode == 200) { 
   console.log(body.id);  
  } 
 }); 
}; 
