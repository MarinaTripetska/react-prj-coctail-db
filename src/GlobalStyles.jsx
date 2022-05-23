import { createGlobalStyle } from "styled-components";
import Popins400 from "./assets/fonts/Poppins-Regular.ttf";
import Popins500 from "./assets/fonts/Poppins-Medium.ttf";
import Popins600 from "./assets/fonts/Poppins-SemiBold.ttf";
import Popins700 from "./assets/fonts/Poppins-Bold.ttf";
import Popins800 from "./assets/fonts/Poppins-ExtraBold.ttf";

const GlobalStyle = createGlobalStyle`

 @font-face {
  font-family: "Poppins";
  src: url(${Popins400}) format("truetype");
  font-style: normal;
  font-weight: 400;
}
@font-face {
  font-family: "Poppins";
  src: url(${Popins500}) format("truetype");
  font-style: normal;
  font-weight: 500;
}
@font-face {
  font-family: "Poppins";
  src: url(${Popins600}) format("truetype");
  font-style: normal;
  font-weight: 600;
}

@font-face {
  font-family: "Poppins";
  src: url(${Popins700}) format("truetype");
  font-style: normal;
  font-weight: 700;
}

@font-face {
  font-family: "Poppins";
  src: url(${Popins800}) format("truetype");
  font-style: normal;
  font-weight: 800;
}
 :root{
 --main-bg-color: #000000;
 --txt-color-grey: #707070;
--txt-color-blue: #3C82F4;
--txt-color-white: #fff;
 }
 
 html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  #root {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  }
  main {
    flex: 2 0 100%;
  }
  
body,
h1,
h2,
p,
ul,
li
 {
  margin: 0;
}
body {
  min-height: 100vh;
  line-height: 1.5;
   font-family: 'Poppins', sans-serif;
     font-style: normal;
  font-weight: 400;
}
ul{
  list-style: none;
    padding: 0;
}
a {
text-decoration:none;
color: inherit;
}

input,
button {
  font: inherit;
}`;

export default GlobalStyle;
