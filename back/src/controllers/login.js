const { User } = require("../DB_connection");

const login = async (req, res) => {
	const { username, password } = req.body;

	try {
		if (!username || !password) return res.status(400).send("Faltan datos");
		if (!User.findOne({ where: { email: username } }))
			return res.status(404).send("Usuario no encontrado");
		if (!User.findOne({ where: { password: password } }))
			return res.status(403).send("Contraseña incorrecta");
		res.status(200).json({
			access: true,
			username: username,
		});
	} catch (error) {
		console.log(error.message);
		res.status(500).send({ error: error.message });
	}
};
module.exports = login;
