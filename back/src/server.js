var http = require("http");
var characters= require("./utils/data");


http.createServer(function(req, res) {
  const {url} = req
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (url.includes('rickandmorty/character')) {
    let id = url.split('/').at(-1)
    let character = characters.find(char => char.id == id);

    if(character){
    res.writeHead(200, {'Content-Type': 'application/json'});
    return res.end(JSON.stringify(character))
  }else{
    res.writeHead(404, {'Content-Type': 'application/json'});
    return res.end(JSON.stringify({error: 'character not found'}))
  }
}
  
}).listen(3001, 'localhost');