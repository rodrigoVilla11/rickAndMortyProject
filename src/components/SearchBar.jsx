import React, { useState } from 'react'
import styled from 'styled-components'



const DivWithAll = styled.div`
   display: flex;
   justify-content: center;
   margin-bottom: 20px;
   background-color: #160440;
   padding: 5px;
   border: 2px solid black;
   box-shadow: 7px 10px 70px 34px #08C952;
`
const RickANDMortyDiv = styled.div`
   display: flex;
   justify-content: left;
   padidng: 0px;
   left: 0;
   `
const RickANDMorty = styled.h1`
   font-size: 15px;
`

const InputSearch = styled.input`
   height: 3em;
   margin-right: 20px;
   border-radius: 10px;
`
const SearchButton = styled.button`
   height: 3em;
   width: 7em;  
   color: white;
   background-color: red;
   border-radius: 10px;
   font-family: get_schwifty;
   &:hover{
      cursor: pointer;
      background-color: green;
   }
`

export default function SearchBar({onSearch}) {

   const [id, setId] = useState('')

   const handleChange = (event) => {
      setId(event.target.value);
   } 

   return (
      <DivWithAll><RickANDMortyDiv>
         <RickANDMorty>RICK<span> and </span> MORTY</RickANDMorty></RickANDMortyDiv>
         <InputSearch type='search' onChange={handleChange}/>
      <SearchButton onClick={() => onSearch(id)}>Agregar</SearchButton> 
      </DivWithAll>
   ); 
}