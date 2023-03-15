import { useState } from "react"
import validate from "./validation"
import styled from "styled-components"

const FormLogIn = styled.form`
    width: 400px;
    height: 500px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    position: relative;  
    background: linear-gradient(#160440,#000000 50% 65%, #08C952 );
    color: white;
    box-shadow: 7px 10px 70px 34px #08C952;
    font-family: get_schwifty;      
`
const DivUsername = styled.div`
margin-top: 45%
`
const DivPassword = styled.div`
margin-top: 25px;
margin-bottom: 10%
`
const Titles = styled.div`
position: absolute;
display:inline-flex;
padding: 30px;
margin-left: 22%;
margin-top: 10%;
`
const Title = styled.span`
display: flex;
color: white;
font-size: 2em;

`
const TitleAnd = styled.span`
display: flex;
color: white;
font-size: 1em;
padding-top: 10px;
`
const Errors = styled.p`
color: red;
`
const LogInButton = styled.button`
    margin: 0 auto;
   height: 3em;
   width: 7em;  
   color: white;
   background-color: green;
   border-radius: 10px;
   font-family: get_schwifty;
   &:hover{
      cursor: pointer;
      background-color: green;
      box-shadow: 7px 10px 70px 34px #08C952;
   }
`
export default function Form ({login}) {

    const [userData, setUserData] = useState({
        username:'',
        password:''
    }) 
    const [errors, setErrors] = useState({
        username:'',
        password:''
    })

    const handleInputChange = (e) => {
      validate({
                ...userData,
                  [e.target.name]: e.target.value
              }, errors, setErrors)
        setUserData({
                ...userData,
                  [e.target.name]: e.target.value
              })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        login(userData);
    }
    return (
       <FormLogIn onSubmit={handleSubmit}>
            <Titles>
            <Title>RICK</Title> <TitleAnd>AND</TitleAnd> <Title>MORTY</Title>
        </Titles>
                <DivUsername><label htmlFor="username">Username: </label>
                    <input onChange={handleInputChange} type="text" name="username" value={userData.username} />
                    <Errors>{errors.username}</Errors>
                    </DivUsername>
                <DivPassword>
                    <label htmlFor="password">Password: </label>
                    <input onChange={handleInputChange} type="password" name="password" value={userData.password} />
                    <Errors>{errors.username}</Errors>
                    </DivPassword>
                    
                <LogInButton type="submit">Login</LogInButton>
            </FormLogIn>
    )
}