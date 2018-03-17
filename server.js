const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const request = require('request');
const amcDeveloperHeaders = {'X-AMC-Vendor-Key':'BA1BBF60-0E67-463A-B479-9A7EF9B7DC25'}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


app.use(express.static(path.join(__dirname, 'public')));


app.get('/moviesnowplaying', function(req, res){
  request.get({url:'https://api.amctheatres.com/v2/movies/views/now-playing',headers:amcDeveloperHeaders},function(error,resp,body){
  res.send(body);
  });
});

app.get('/coming-soon', function(req, res){
  request.get({url:'https://api.amctheatres.com/v2/movies/views/coming-soon',headers:amcDeveloperHeaders},function(error,resp,body){
  res.send(body);
  });
});


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

const port = process.env.PORT || '3004';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running with:${port}`));
