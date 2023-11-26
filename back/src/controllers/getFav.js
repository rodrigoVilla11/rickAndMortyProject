const { Favorite, User } = require("../DB_connection");

const getFav = async (req, res) => {
	// const { user } = req.body;
	const { user } = req.query;
	console.log(user);
	try {
		const response = await User.findOne({
			where: { email: JSON.parse(user) },
		});

		res.status(200).json(response.favorites);
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ error: error.message });
	}
};
module.exports = getFav;
