import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Register from "./components/Form/Register";
import Favorites from "./components/Favorites/Favorites";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

function App() {
	const navigate = useNavigate();
	const [characters, setCharacters] = useState([]);
	const dispatch = useDispatch();

	const [access, setAccess] = useState({
		access: false,
		username: "",
	});

	async function login(userData) {
		let isAllow = await axios
			.post(`/login`, userData)
			.then((res) => res.data)
			.catch((e) => console.log(e));

		if (isAllow.access === true) {
			window.localStorage.setItem("user", JSON.stringify(isAllow));
			navigate("/home");
		} else {
			alert("Invalid username or password");
		}
	}
	function logOut() {
		window.localStorage.setItem(
			"user",
			JSON.stringify({ access: false, username: "" })
		);
		navigate("/");
	}

	async function register(userData) {
		let registerData = await axios
			.post(`/register`, userData)
			.then((res) => res.data)
			.catch((e) => console.log(e));

		console.log(registerData);
	}

	useEffect(() => {
		{
			window.localStorage.user.access &&
				!window.localStorage.user.access &&
				navigate("/");
		}
	}, [access]);

	const onSearch = (character) => {
		//const KEY = '86334f583361.82f001e1c09131539161'
		const URL_BASE = "https://rickandmorty-24f4.onrender.com/rickandmorty";

		if (characters.find((char) => char.character === character)) {
			return alert("Personaje repetido");
		}

		fetch(`${URL_BASE}/onsearch/${character}`)
			.then((response) => response.json())
			.then((data) => {
				if (data.name && !characters.find((char) => char.id === data.id)) {
					setCharacters((oldChars) => [...oldChars, data]);
				} else {
					window.alert("No hay personajes con ese ID");
				}
			});
	};

	const onClose = (id) => {
		setCharacters(characters.filter((char) => char.id !== id));
	};
	const location = useLocation();

	return (
		<div className="App" style={{ padding: "25px" }}>
			{location.pathname !== "/" && location.pathname !== "/register" && (
				<Nav onSearch={onSearch} logOut={logOut} />
			)}
			<Routes>
				<Route path="/" element={<Form login={login} />} />
				<Route path="/register" element={<Register register={register} />} />
				<Route
					path="/home"
					element={<Cards characters={characters} onClose={onClose} />}
				/>
				<Route path="/detail/:id" element={<Detail />} />
				<Route path="/about" element={<About />} />
				<Route
					path="/favorites"
					element={<Favorites access={access.username} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
