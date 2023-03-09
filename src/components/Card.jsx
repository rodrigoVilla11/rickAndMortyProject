import React from 'react'
import styled from 'styled-components'

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
   margin-left: 80%;
   margin-top: 10px;
   margin-bottom: 0px;
   color: black;
   background-color: #08C952;
   border-radius: 15px;
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

export default function Card(/*props*/{id, name, species, gender, image, onClose}) { //usar destructuring para directamene agarrar lo que necesitamos
   return (
      <DivCard>
          <ButtonX onClick={() => onClose(id)}>X</ButtonX>
          <NameCard>{/*props. de vuelta el destructring para usar solo lo que necesitamos*/name}</NameCard> 
          <ImgBetter  src={image} alt={name} /> 
            <OtherH2>{species}</OtherH2><OtherH2>{gender}</OtherH2> 
      </DivCard>
   );
}
