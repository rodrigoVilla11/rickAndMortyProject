const { Favorite, User } = require("../DB_connection");

const getFav = async (req, res) => {
	// const { user } = req.body;
	const { user } = req.query;

	try {
		const response = await User.findOne({
			where: { email: JSON.parse(user) },
			include: {
				model: Favorite,
				attributes: ["id", "name", "species", "gender", "image"], // Lista de propiedades que deseas incluir
			},
		});

		res.status(200).json(response.Favorites);
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ error: error.message });
	}
};
module.exports = getFav;
