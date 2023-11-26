import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../Cards/Card";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {getCharacters, filterCards, orderCards} from "../../redux/myFavoritesAction"


const Favorites = () => {
    const favorites = useSelector((state) => state.myFavorites)
    const dispatch = useDispatch();

    const localST = JSON.parse(localStorage.getItem("user"));
	const user = JSON.stringify(localST.username);
        
    const allFavorites = favorites.myFavorites
    useEffect(()=>{
        dispatch(getCharacters(user))
    },[user, dispatch])

    const handleOrderCards = (e) =>{
        const value = e.target.value
        dispatch(orderCards(value, allFavorites))
    }
    const handleFilterCards = (e) => {
        dispatch(filterCards(e.target.value, allFavorites))
    }
    const handleRefresh = (e) => {
        e.preventDefault()
        dispatch(getCharacters(user))
    }

   
    
    return(
        <GlobalDiv><FavoritesTitle>Favorites</FavoritesTitle>
        <div><select name="" onChange={handleOrderCards}>
            <option selected disabled>Choose One</option>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
            </select>
            <select name="" onChange={handleFilterCards}>
            <option selected disabled>Choose One</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            </select>
            <button onClick={handleRefresh}>Refresh</button>
            </div>
        <DivOtherCharacters>
            { allFavorites.map(({id, name, species, gender, image, key})=>{
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
        </DivOtherCharacters>
        </GlobalDiv>
    )
    }

export default Favorites;



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