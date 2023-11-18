const axios = require("axios");
//const {KEY, URL} = process.env
const URL = "https://rickandmortyapi.com/api";
const KEY = "86334f583361.82f001e1c09131539161";

const getCharDetail = async (req, res) => {
	try {
		const { detailId } = req.params;
		const response = await axios.get(`${URL}/character/${detailId}`);
		const { id, name, species, image, gender, origin } = response.data;
		res.status(200).json({ id, name, species, image, gender, origin });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
module.exports = getCharDetail;
