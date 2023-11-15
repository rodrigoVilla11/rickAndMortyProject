const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
	try {
		const { id } = req.params;
		const character = await Favorite.findByPk(id);
		await character.destroy();
		res.status(200).json({ status: "deleted" });
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: err.message });
	}
};
module.exports = deleteFav;
