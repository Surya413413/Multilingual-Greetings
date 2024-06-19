import styled from 'styled-components'

export const CustomSelectContainer = styled.li`
display:flex;
align-items:center;
justify-content:center;

`

export const CustomButton = styled.button`
background-color:${props => (props.value ? 'red' : 'white')};
color:${props => (props.value ? 'white' : 'red')};
border-color:red;
margin:10px;
padding:20px;
font-size:20px;
border-radius:10px;
cursor:pointer;
`
