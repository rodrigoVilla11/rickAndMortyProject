import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {
	const navigate = useNavigate();
	const [characters, setCharacters] = useState([]);

	const [access, setAccess] = useState(false);
	const username = "villarrealrodrigo.n@gmail.com";
	const password = "Rvilla11";

	function login(userData) {
		if (userData.password === password && userData.username === username) {
			setAccess(true);
			navigate("/home");
		} else {
			alert("Invalid username or password");
		}
	}
	function logOut() {
		setAccess(false);
		navigate("/");
	}

	useEffect(() => {
		!access && navigate("/");
	}, [access]);

	const onSearch = (character) => {
		//const KEY = '86334f583361.82f001e1c09131539161'
		const URL_BASE = "http://localhost:3001/rickandmorty";

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
			{location.pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut} />}
			<Routes>
				<Route path="/" element={<Form login={login} />} />
				<Route
					path="/home"
					element={<Cards characters={characters} onClose={onClose} />}
				/>
				<Route path="/detail/:id" element={<Detail />} />
				<Route path="/about" element={<About />} />
				<Route path="/favorites" element={<Favorites />} />
			</Routes>
		</div>
	);
}

export default App;
