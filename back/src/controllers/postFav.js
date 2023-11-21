const { Favorite, User } = require("../DB_connection");

const postFav = async (req, res) => {
	const { id, name, image, species, gender, user } = req.body;

	try {
		if (!name || !image || !species || !gender)
			return res.status(401).send("Faltan datos");
		const favorite = await Favorite.create({
			id,
			name,
			image,
			species,
			gender,
		});
		const userAdd = await User.findOne({ where: { email: JSON.parse(user) } });

		if (!userAdd) {
			return res.status(404).json({ error: "Usuario no encontrado" });
		}

		await userAdd.addFavorite(favorite);

		res
			.status(200)
			.send({ status: "User associated with favorite successfully" });
	} catch (err) {
		console.log(err.message);
		res.status(500).json({ error: err.message });
	}
};
module.exports = postFav;
