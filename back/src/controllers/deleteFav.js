const { Favorite, User } = require("../DB_connection");

const deleteFav = async (req, res) => {
	const { id } = req.params;
	const { user } = req.query;
	try {
		const userAdd = await User.findOne({ where: { email: JSON.parse(user) } });

		if (!userAdd) {
			return res.status(404).json({ error: "Usuario no encontrado" });
		}

		const arrayFiltered = userAdd.favorites.filter(
			(favorite) => favorite.id !== id
		);

		userAdd.favorites = arrayFiltered;

		await userAdd.save();

		res.status(200).json({ status: "deleted" });
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: err.message });
	}
};
module.exports = deleteFav;
