require('babel-core/register');
const config = require('./config.dev.json')
const axios = require('axios');
const Docker = require('dockerode');
request = require('request');

var express = require('express')
var cors = require('express-cors')
var app = express()



var dockerClient = new Docker({host: "114.55.130.152", port: 2377})

app.use(cors({
    allowedOrigins: [
      "localhost:8080"
    ]
}))

app.use(function(req, res, next) {
  console.log('%s %s %s', req.method, req.url, req.path);
  console.time("req");
  next();
  console.timeEnd("req");
});

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/containers', function (req, res) {
  dockerClient.listContainers(function (err, containers) {
    jsonResp = [];
    containers.forEach(function (containerInfo) {
      jsonResp.push(containerInfo);
    });
    res.json(jsonResp);
  });
})


app.get('/state', function (req, res) {
  request('http://114.55.130.152:5050/state.json', function (error, response, body) {
    res.json(JSON.parse(body))
  })
})


app.listen(3000)

