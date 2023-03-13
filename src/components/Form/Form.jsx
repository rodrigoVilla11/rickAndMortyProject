import { useState } from "react"
import validate from "./validation"
import styled from "styled-components"

const FormLogIn = styled.form`
    border: 1px solid black;
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
border: 1px solid black;
margin-top: 40%
`
const DivPassword = styled.div`
border: 1px solid black;
margin-top: 25px;
margin-bottom: 15%
`
const Titles = styled.div`
position: absolute;
display:inline-flex;
padding: 30px;
margin-left: 22%;
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
                    <Errors>{errors.username}</Errors></DivUsername>
                <DivPassword>
                    <label htmlFor="password">Password: </label>
                    <input onChange={handleInputChange} type="password" name="password" value={userData.password} />
                    <Errors>{errors.password}</Errors></DivPassword>
                <button type="submit">Log In</button>
            </FormLogIn>
    )
}