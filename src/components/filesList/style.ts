import styled from "styled-components";


export const StyledListContainer = styled.div`
width: 100%;
background-color: white;
max-height:400px;
display: flex;
flex-direction: column;
border:1px solid black;
padding:10px;


`

export const StyledListRow = styled.div`
width: 100%;
display: flex;
flex-direction:row;
justify-content: space-between;
;
`

export const StyledText = styled.p`
font-size:15px;
font-weight:600;
width:120px;
text-overflow: ellipsis;
overflow:hidden;
max-height:20px;
`