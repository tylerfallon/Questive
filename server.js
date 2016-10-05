const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(process.cwd() + "/public"));

//Nagivate the simple page on HTML 
app.get("*", function(req, res) {
	console.log(0);
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, function(){
  console.log("App listening on port %s", PORT);
});
