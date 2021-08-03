import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
   --app-width: 1250px;
   --row: 1050px;
   --section-pad: 0 10rem;
   --header-half: 56rem;


   @media (max-width: 1300px) {
    --app-width: 92vw;
   }

   @media (max-width: 600px) {
--section-pad: 0 4rem;
   }

   // colors
   --text-brown: #291507;
   --line-brown: #4D270C;
   --block-color: #DEC68B;

}

*,
*::after,
*::before{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

html{
  font-size: 62.5%;

  @media (max-width: 950px) {
     font-size: 50%;
  }

  @media (max-width: 600px) {
     font-size: 37.5%;
  }
}

body {
   font-family: 'Montserrat';
   font-weight: 500;
   line-height: 1.6;
   color: var(--text-color);
}
button, input, a, select {
    font: inherit;
    color: inherit;
    text-decoration: none;
    outline: none;
    border: none;
}


button {
   cursor: pointer;
}
`;

export default GlobalStyle;
