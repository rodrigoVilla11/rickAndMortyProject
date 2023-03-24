const axios = require('axios');
//const {KEY, URL} = process.env
const URL = 'http://be-a-rym.up.railway.app/api';
const KEY = '86334f583361.82f001e1c09131539161'

const getCharDetail = (res, ID) => {
    axios.get(`${URL}/character/${ID}?key=${KEY}`).then((response) => {
        const {image, name, gender, status, origin, species} = response.data;
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({image, name, gender,status, origin, species}))
    })
    .catch(err => {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end(err.message)
    })
}

module.exports = getCharDetail;