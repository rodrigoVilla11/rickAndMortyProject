const { User } = require("../DB_connection");

const postUser = async (req, res) => {
	const { username, password } = req.body;
	{
		if (!username || !password) throw Error("Faltan Datos");
		await User.create({ email: username, password });
		res.status(200).send({ msg: "created" });
	}
};

module.exports = postUser;
