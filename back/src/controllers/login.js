const { User } = require("../DB_connection");

const login = async (req, res) => {
	const { email, password } = req.query;
	try {
		if (!email || !password) return res.status(400).send("Faltan datos");
		if (!User.findOne({ where: { email: email } }))
			return res.status(404).send("Usuario no encontrado");
		if (!User.findOne({ where: { password: password } }))
			return res.status(403).send("Contraseña incorrecta");
		res.status(200).json({
			access: true,
		});
	} catch (error) {
		res.status(500).send({ error: error.message });
	}
};
module.exports = login;
