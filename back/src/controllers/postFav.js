const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
	const { id, name, image, species, gender } = req.body;
	try {
		if (!name || !image || !species || !gender)
			return res.status(401).send("Faltan datos");
		await Favorite.create({
			id,
			name,
			image,
			species,
			gender,
		});
		res.status(200).send({ status: "success" });
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: err.message });
	}
};
module.exports = postFav;
