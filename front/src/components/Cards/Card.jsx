import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import styles from './beatingHeart.module.css'
import { Link } from 'react-router-dom'
//import {addCharacter, removeCharacter} from   '../../redux/actions'
import { connect } from 'react-redux'
import axios from 'axios'

const DivCard = styled.div`
   border: solid 1px;
   width: 200px;
   heigth: 300px;
   border-radius: 10px; 
   margin: 0 auto;
   margin-top: 100px;
   background: linear-gradient(#160440,#000000 50% 65%, #08C952 );
   box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
   webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
   moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
   &:hover{
      box-shadow: 7px 10px 70px 34px rgba(237,207,107,1);
      webkit-box-shadow: 7px 10px 70px 34px rgba(237,207,107,1);
      moz-box-shadow: 7px 10px 70px 34px rgba(237,207,107,1);
   }
   `
const ImgBetter = styled.img`
   display: flex;
   width: 80%;
   margin 0px auto 0px auto;
   border-radius: 10px;
   border: 2px solid #EDCF6B;
   box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`
const ButtonX = styled.button`
display: inline-flex;
font-size: 0.8em;
   color: black;
   background-color: #08C952;
   border-radius: 15px;
   margin-left: 30%;
   &:hover{
      cursor: pointer;
   }
`
const NameCard = styled.h2`
   color: white;
   border-color: white;
   font-family: get_schwifty;
   font-size: 1.5em;
   text-shadow: 4px 4px 2px rgba(8,201,82,0.6);
`

const OtherH2 = styled.h2`
   display: inline-block;
   color: black;
   font-family: get_schwifty;
   font-size: 1em;
   width: 45%;
   border-left: 2px solid black;
   border-right: 2px solid black;
   border-bottom: 2px solid black;
   text-shadow: 4px 4px 2px rgba(0,0,0,0.6);
`

const HearthButton = styled.button`
display: inline-flex;
background: none;
border: none;
font-size: 1.2em;
margin-right: 30%;
&:hover{
   cursor: pointer;
}
`


export function Card({id, name, species, gender, image, onClose, myFavorites}) { //usar destructuring para directamene agarrar lo que necesitamos
   const [isFav, setIsFav] = useState(false)
   
   const addCharacter = async (character) => {
      try{ await axios.post('http://localhost:3001/rickandmorty/fav', character)
      console.log('ok')}
      catch(error){
         return {error: error.message}
      }
   };
   const removeCharacter = async (id) =>{
     try{ await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)}
     catch(error){
      return {error: error.message}
   }
   }
   

  const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeCharacter(id);
      }else{
         setIsFav(true);
         addCharacter({id, name, species, gender, image});
      }
   }

   useEffect(() => { //CREO QUE NO SE USA MAS
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <DivCard>
         {isFav ? (<HearthButton onClick={handleFavorite}><span className={styles.heart}>❤️</span></HearthButton>) : (<HearthButton onClick={handleFavorite}><span>🤍</span></HearthButton>)}
          <ButtonX onClick={() => onClose(id)}>X</ButtonX>
          <NameCard><Link to={`/detail/${id}`}style={{textDecoration: 'none', color: 'white'}}>{/*props. de vuelta el destructring para usar solo lo que necesitamos*/name}</Link></NameCard> 
          <ImgBetter  src={image} alt={name} /> 
            <OtherH2>{species}</OtherH2><OtherH2>{gender}</OtherH2> 
      </DivCard>
   );
}
export function mapStateToProps(state){
   return{
      myFavorites: state.myFavorites
   }
}
 export default connect(mapStateToProps)(Card)