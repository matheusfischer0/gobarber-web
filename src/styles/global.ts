import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  outline:0;
}



body{
  background:#312e38;
  color:#FFF;
  -webkit-font-smoothing: antialiased;
}

body, input, button{
  font-family: 'Roboto Slab', serif;
}

/*Change text in autofill textbox*/
input:-webkit-autofill {
    -webkit-text-fill-color: #dedede !important;
    transition: background-color 5000s ease-in-out 0s;
}

h1, h2, h3,h4,h5,h6,strong{
  font-weight:500
}

button{
  cursor: pointer;
}
`;
