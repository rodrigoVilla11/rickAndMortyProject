const axios = require('axios');
//const {KEY, URL} = process.env
const URL = 'http://be-a-rym.up.railway.app/api';
const KEY = '86334f583361.82f001e1c09131539161'

const getCharById = (res, ID) => {
    axios.get(`${URL}/character/${ID}?key=${KEY}`).then((response) => {
        const {id, name, gender, species, image} = response.data;
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({id, image, name, gender, species}))
    })
    .catch(err => {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end(err.message)
    })
}

module.exports = getCharById;