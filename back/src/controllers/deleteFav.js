const { Favorite, User } = require("../DB_connection");

const deleteFav = async (req, res) => {
	const { id } = req.params;
	const { user } = req.query;
	console.log(user);
	try {
		const userAdd = await User.findOne({ where: { email: JSON.parse(user) } });

		if (!userAdd) {
			return res.status(404).json({ error: "Usuario no encontrado" });
		}

		const character = await Favorite.findByPk(id);

		await userAdd.removeFavorite(character);

		res.status(200).json({ status: "deleted" });
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: err.message });
	}
};
module.exports = deleteFav;
