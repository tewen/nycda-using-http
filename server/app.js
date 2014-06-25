var http = require('http'),
    express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser');

var app = express();
app.set('port', process.env.PORT || 4000);
app.use(express.static(path.join(__dirname, '../')));
app.use(bodyParser.json());

app.post('/post-service-example', function (req, res) {
   res.send("You made a post of: " + JSON.stringify(req.body));
});

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});