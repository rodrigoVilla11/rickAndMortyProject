const { User } = require("../DB_connection");

const postUser = async (req, res) => {
	const { email, password } = req.body;
	console.log({ email, password });
	{
		if (!email || !password) throw Error("Faltan Datos");
		await User.create({ email, password });
		res.status(200).send({ msg: "created" });
	}
};

module.exports = postUser;
