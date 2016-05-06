var express = require('express');
var app = express();

app.set("views", "./views");
app.set('view engine', 'jade');

app.use(express.static("public"));
app.use(express.static("node_modules/bootstrap/dist"));

app.get('/', function(req, res){
  res.render('index',{title: "Home"});
});

app.get('/admin/room', function(req, res){
  res.render('room', {title: "Admin Room"});
});

app.get('/admin/user', function(req, res){
  res.render('user', {title: "Welcome User"});
});

app.listen(3000, function(){
  console.log('Chat app listening on port 3000');
});