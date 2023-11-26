const { User, Favorite } = require("../DB_connection");

const getUser = async (req, res) => {
	try {
		const response = await User.findAll();
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
module.exports = getUser;
