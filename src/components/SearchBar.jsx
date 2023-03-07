import styled from 'styled-components'

const DivWithAll = styled.div`
   display: flex;
   justify-content: center;
`

const InputSearch = styled.input`
   height: 2.5em;
   margin-right: 20px;
   border-radius: 10px;
`
const SearchButton = styled.button`
   color: white;
   background-color: green;
`

export default function SearchBar(props) {
   return (
      <DivWithAll>
         <InputSearch type='search' />
      <SearchButton onClick={(id) => (props.onSearch(id))}>Agregar</SearchButton> 
      </DivWithAll>
   );
}
