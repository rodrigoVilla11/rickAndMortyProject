import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import { useState } from 'react'

function App () {
  const [characters, setCharacters] = useState([]);

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

  return (
    <div className='App' style={{ padding: '25px'}}>
      <Nav onSearch={onSearch}/>
      <Cards
        characters={characters}
        onClose={onClose}
      />
    </div>
  )
}

export default App
