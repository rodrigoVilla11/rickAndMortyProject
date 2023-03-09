import React from 'react'
import SearchBar from './SearchBar.jsx'
import styled from 'styled-components'

const NavBar = styled.nav`
   position: fixed;
   top: 0;
   width: 100%;
   left: 0;
   background-color: red
` 

export default function Nav(props) {

    return <NavBar>
    <SearchBar
      onSearch={props.onSearch}
    />
  </NavBar>
}
