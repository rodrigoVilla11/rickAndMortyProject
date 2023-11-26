require("dotenv").config();
const { Sequelize } = require("sequelize");
const FavoriteModel = require("./models/Favorite");
const UserModel = require("./models/User");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
	`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/verceldb`,
	{
		logging: false,
		native: false,
		dialectOptions: {
			ssl: {
				require: true,
				rejectUnauthorized: false, // Asegúrate de entender las implicaciones de desactivar la verificación del certificado en un entorno de producción.
			},
		},
	}
);

FavoriteModel(sequelize);

UserModel(sequelize);

const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite, { through: "user_favorite" });
Favorite.belongsToMany(User, { through: "user_favorite" });

module.exports = {
	User,
	Favorite,
	conn: sequelize,
};
