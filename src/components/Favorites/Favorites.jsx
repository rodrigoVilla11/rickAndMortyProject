import React from "react";
import { useSelector } from "react-redux";
import Card from "../Cards/Card";
import styled from "styled-components";

const GlobalDiv = styled.div`
`

const FavoritesTitle = styled.h1`
position: relative;
margin-top: 5px;
color: black;
border-color: white;
font-family: get_schwifty;
font-size: 3em;
text-shadow: 4px 4px 2px rgba(8,201,82,0.6);
margin-bottom: 0;
`
const OtherCharacters = styled.div`
display: flex;   
`
const DivOtherCharacters = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
`

const Favorites = () => {
    const favorites = useSelector((state) => state.myFavorites)

    return(
        <GlobalDiv><FavoritesTitle>Favorites</FavoritesTitle>
        <DivOtherCharacters>
            {favorites.map(({id, name, species, gender, image})=>{
         return <OtherCharacters>
        <Card  
        id = {id}
        name = {name}
        species = {species}
        gender = {gender}
        image = {image}
        key ={id}
        /></OtherCharacters>
      })}
        </DivOtherCharacters></GlobalDiv>
    )
    }

export default Favorites;