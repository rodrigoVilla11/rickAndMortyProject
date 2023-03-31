import React, { useState } from 'react'
import styled from 'styled-components'

export default function SearchBar({onSearch}) {

   const [id, setId] = useState('')

   const handleChange = (event) => {
      setId(event.target.value);
   } 

   return (
      <>
         <InputSearch type='search' onChange={handleChange}/>
      <SearchButton onClick={() => onSearch(id)}>Agregar</SearchButton> 
      </>
   ); 
}



const InputSearch = styled.input`
   height: 3em;
   margin-right: 20px;
   border-radius: 10px;
`
const SearchButton = styled.button`
   height: 3em;
   width: 7em;  
   color: white;
   background-color: #EDCF6B;
   border-radius: 10px;
   font-family: get_schwifty;
   &:hover{
      cursor: pointer;
      background-color: green;
   }
`