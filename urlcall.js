const request = require('request');

var url = "https://whats-db-image-4il4iagd2q-wl.a.run.app/api/numbers";
var srcmsj = "BOTCIIP"
var headers = {
   "Content-Type" : "application/json"
}
var body = {
    phonenumber: "5534343434",
    description: "usermessage",
    source: "notvalid"
}
request.post({
   "url": url,
   "headers": headers,
   "body": JSON.stringify(body)
}, (err, response, body) => {
   if (err) {
       reject(err);
   }
   console.log("response: ", JSON.stringify(response));
   console.log("body: ",body);
});