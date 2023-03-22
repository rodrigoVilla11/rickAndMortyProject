import React from "react";
import { useSelector } from "react-redux";
import Card from "../Cards/Card";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";

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
    const dispatch = useDispatch();

    const handleOrderCards = (e) =>{
        dispatch(orderCards(e.target.value))
    }
    const handleFilterCards = (e) => {
        dispatch(filterCards(e.target.value))
    }

    return(
        <GlobalDiv><FavoritesTitle>Favorites</FavoritesTitle>
        <div><select name="" onChange={handleOrderCards}>
            <option value="">Choose One</option>
            <option value="Ascendente">Ascendente </option>
            <option value="Descendente">Descendente</option>
            </select>
            <select name="" onChange={handleFilterCards}>
            <option value="">Choose One</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>

            </select>
            </div>
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