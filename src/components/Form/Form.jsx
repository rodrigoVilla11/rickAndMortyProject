import React, {useState, useEffect } from "react"
import {validateUsername, validatePassword} from "./validation"
import styled from "styled-components"

const FormLogIn = styled.form`
    width: 400px;
    height: 500px;
    display: flex;
    flex-direction: column;
    margin: 30px auto;
    position: relative;  
    background: linear-gradient(#160440,#000000 50% 65%, #08C952 );
    color: white;
    box-shadow: 7px 10px 70px 34px #EDCF6B;
    font-family: get_schwifty;  
    &:hover {
        box-shadow: 7px 10px 70px 34px #08C952;
    }
        
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
   background-color: #160440;
   border-radius: 10px;
   font-family: get_schwifty;
   &:hover{
      cursor: pointer;
      background-color: green;
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
        const { name, value } = e.target;
        setUserData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
      
      useEffect(() => {
        const newErrors = { ...errors };
        validateUsername(userData, newErrors, setErrors);
        validatePassword(userData, newErrors, setErrors);
        console.log("New errors:", newErrors);
      }, [userData, setErrors]);
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!errors.username && !errors.password)
        login(userData);
    }
    return (
       <FormLogIn onSubmit={handleSubmit}>
            <Titles>
            <Title>RICK</Title> <TitleAnd>AND</TitleAnd> <Title>MORTY</Title>
        </Titles>
                <DivUsername>
                <label htmlFor="username">Username: </label>
                    <input onChange={handleInputChange} type="text" name="username" value={userData.username} />  
                    </DivUsername>
                <DivPassword>
                    <label htmlFor="password">Password: </label>
                    <input onChange={handleInputChange} type="text" name="password" value={userData.password} />
                    </DivPassword>
                    <Errors> 
                        {errors.username}
                    </Errors> 
                    <Errors> 
                        {errors.password}
                    </Errors>
                <LogInButton type="submit">Login</LogInButton>
            </FormLogIn>
    )
}
