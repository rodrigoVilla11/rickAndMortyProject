const http = require("http");
const getCharById = require("./controllers/getCharById.js")
const getCharDetails = require("./controllers/getCharDetail") 
require('dotenv').config();


http.createServer(function(req, res) {
  const {url} = req
  res.setHeader('Access-Control-Allow-Origin', '*');
  const id = url.split('/').at(-1)

  if(url.includes('onsearch')){
    getCharById(res, id);
  }
  if(url.includes('detail')){
    getCharDetails(res, id)
  }
}).listen(3001, 'localhost');