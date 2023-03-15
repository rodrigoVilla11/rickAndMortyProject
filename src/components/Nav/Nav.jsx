import React from 'react'
import SearchBar from './SearchBar.jsx'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const NavBar = styled.nav`
position: relative;
display: flex;
padding: 10px;
background-color: #160440;
border: 2px solid black;
box-shadow: 7px 10px 70px 34px #08C952;
font-family: get_schwifty;
` 
const DivForSearch = styled.div`
   display:flex;
   margin-left: auto;
   margin-right: 10px;
`
const AboutAndHome = styled.span`
  display: inline-flex;
  font-size: 1.5em;
  color: white;
  padding-top: 5px;
  margin-left:80px;
  &:hover{
    cursor: pointer;
    color: rgba(8,201,82,0.6);
  }
`
const Titles = styled.div`
position: absolute;
left: 45%;
display:inline-flex
`
const Title = styled.span`
display: flex;
color: white;
font-size: 2em;
marign: 0 auto;
`
const TitleAnd = styled.span`
display: flex;
color: white;
font-size: 1em;
padding-top: 10px;
`
const ButtonLogOut = styled.button`
height: 3em;
width: 7em;  
color: white;
background-color: green;
border-radius: 10px;
font-family: get_schwifty;
&:hover{
   cursor: pointer;
   background-color: red;
}
`
export default function Nav(props, {logOut}) {

    return <NavBar>
      <div>
        <AboutAndHome ><NavLink to="/home" style={{textDecoration: 'none', color: 'white'}}>Home</NavLink></AboutAndHome>
        <AboutAndHome><NavLink to="/about" style={{textDecoration: 'none', color: 'white'}}>About</NavLink></AboutAndHome>
        <AboutAndHome><NavLink to='/favorites' style={{textDecoration: 'none', color: 'white'}}>My Favorites</NavLink></AboutAndHome>
        </div>
      <Titles>
        <Title>RICK</Title> <TitleAnd>AND</TitleAnd> <Title>MORTY</Title>
      </Titles>
      <DivForSearch>
    <SearchBar
      onSearch={props.onSearch}
    /></DivForSearch>
    <NavLink to='/'>
    <ButtonLogOut /*onClick={()=>logOut()}*/>Log Out</ButtonLogOut></NavLink>
  </NavBar>
}
