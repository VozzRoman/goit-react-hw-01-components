import styled from "@emotion/styled";

// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

export const Item = styled.li`
flex: 0 25%;
display: flex;
padding: 10px;
flex-direction: column;
border: 1px solid gray;
background-color:${(props) => {
return props.color;
}}
`;

export const Label = styled.span`
font-size: 19px;
font-weight: 600;
margin-bottom: 10px;


`;
export const Percentage = styled.span`
color: gray;

`;
