require("dotenv").config();
const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const { conn } = require("./DB_connection");

const server = express();
server.use(express.json());
server.use(morgan("dev"));
server.use(cors());

server.use("/rickandmorty", router);

const PORT = process.env.PORT || 3001;
//res.setHeader('Access-Control-Allow-Origin', '*')

server.listen(PORT, () => {
	conn.sync();
	console.log(`listening on port ${PORT}`);
});
