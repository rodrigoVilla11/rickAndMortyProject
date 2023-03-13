import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import { useState, useEffect } from 'react'
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'

function App () {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false)
  const username = 'villarrealrodrigo.n@gmail.com'
  const password = 'Rvilla11'

  function login(userData) {
    if (userData.password === password && userData.username === username) {
       setAccess(true);
       navigate('/home');
    }
 } 
 function logOut() {
    navigate('/');
 }

 useEffect(() => {
  !access && navigate('/');
}, [access]);

  const onSearch = (character) => {
    const KEY = '86334f583361.82f001e1c09131539161'
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    fetch(`${URL_BASE}/character/${character}?key=${KEY}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name && !characters.find((char) => char.id === data.id)) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

 const onClose = (id) => {
  setCharacters(
    characters.filter((char)=> char.id !== id)
  )
 }
 const location = useLocation();

  return (
    <div className='App' style={{ padding: '25px'}}>
      {location.pathname !== '/' && <Nav onSearch={onSearch} logOut={logOut}/>}
      <Routes>
        <Route path='/' element={<Form login={login}/>} />
      <Route path='/home' element={<Cards 
        characters={characters}
        onClose={onClose}/>}/>
        <Route path="/detail/:id" element={<Detail />}/> 
        <Route path='/about' element={<About />}/>
      </Routes>
    </div>
  )
}

export default App
