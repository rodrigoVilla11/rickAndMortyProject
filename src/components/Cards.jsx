import Card from './Card';
import styled from 'styled-components'

const OtherCharacters = styled.div`
display: inline-flex;
`
const DivOtherCharacters = styled.div`
display: flex;
justify-content: space-evenly;
`

export default function Cards(props) {
   const { characters } = props;
   return <DivOtherCharacters>
      {characters.map(({name, species, gender, image})=>{
         return <OtherCharacters>
        <Card  
        name = {name}
        species = {species}
        gender = {gender}
        image = {image}
        onClose={() => window.alert('Emulamos que se cierra la card')}
        /></OtherCharacters>
      })}
   </DivOtherCharacters>;
}
