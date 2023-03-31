import styled from "styled-components";

export default function About(props)
{
return (
    <div>
<Total>
<Title>Quien Soy?</Title>
</Total>
<div><Title2>Mi nombre es Rodrigo Villarreal, soy un estudiante de soyHenry, terminando el M2 y por arrancar con confianza y muchas ganas el M3</Title2></div>
</div>
)}


const Total = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
font-size: 5em;
color: white;
font-family: get_schwifty
`
const Title2 = styled.h2`
font-size: 1.5em;
color: white;
`