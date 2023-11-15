const axios = require("axios");
//const {KEY, URL} = process.env
const URL = "http://be-a-rym.up.railway.app/api";
const KEY = "86334f583361.82f001e1c09131539161";

const getCharById = async (req, res) => {
	try {
		const { id } = req.params;
		const response = await axios.get(`${URL}/character/${id}?key=${KEY}`);
		const { id: charId, name, species, image, gender } = response.data;
		res.status(200).json({ id, name, species, image, gender });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
module.exports = getCharById;
