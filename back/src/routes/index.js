const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");
const login = require("../controllers/login");
const postUser = require("../controllers/postUser");
const getUsers = require("../controllers/getUsers");
const getFav = require("../controllers/getFav");
getFav;

const router = Router();

router.get(`/detail/:detailId`, getCharDetail);

router.get("/onsearch/:id", getCharById);

//*********************************************************

//router.get("/fav", );

router.post("/fav", postFav);

router.delete("/fav/:id", deleteFav);

router.post("/login", login);

router.post("/register", postUser);

router.get("/users", getUsers);

router.get("/fav", getFav);

module.exports = router;
