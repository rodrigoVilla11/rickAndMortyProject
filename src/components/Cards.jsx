import React from 'react'
import Card from './Card';
import styled from 'styled-components'

const OtherCharacters = styled.div`
display: inline-flex;
`
const DivOtherCharacters = styled.div`
display: flex;
justify-content: space-evenly;
`

export default function Cards({characters, onClose}) {
   return <DivOtherCharacters>
      {characters.map(({id, name, species, gender, image})=>{
         return <OtherCharacters>
        <Card  
        id = {id}
        name = {name}
        species = {species}
        gender = {gender}
        image = {image}
        onClose={onClose}
        /></OtherCharacters>
      })}
   </DivOtherCharacters>;
}
