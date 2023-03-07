import styled from 'styled-components'

const DivCard = styled.div`
   border: solid 1px;
   width: 250px;
   heigth: 400px;
   border-radius: 10px; 
   margin: 0 auto;
   background: linear-gradient(#6CF03A,#000000, #EAE438 );
`
const ImgBetter = styled.img`
   display: flex;
   width: 100%;
   margin 0px auto 0px auto;
`
const ButtonX = styled.button`
   margin-left: 85%;
   margin-top: 10px;
   margin-bottom: 0px;
   color: white;
   background-color: red;
   border: 1px solid white;
   &:hover{
      cursor: pointer;
   }
`
const NameCard = styled.h2`
   color: white;
   font-size: 2em;
`

const OtherH2 = styled.h2`
   display: inline-block;
   color: black;
   font-size: 1em;
   width: 45%;
   border-left: 2px solid black;
   border-right: 2px solid black;
   border-bottom: 2px solid black;
`

export default function Card(/*props*/{name, species, gender, image, onClose}) { //usar destructuring para directamene agarrar lo que necesitamos
   return (
      <DivCard>
          <ButtonX onClick={onClose}>X</ButtonX>
          <NameCard>{/*props. de vuelta el destructring para usar solo lo que necesitamos*/name}</NameCard> 
          <ImgBetter  src={image} alt={name} /> 
            <OtherH2>{species}</OtherH2><OtherH2>{gender}</OtherH2> 
      </DivCard>
   );
}
