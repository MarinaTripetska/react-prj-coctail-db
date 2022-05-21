import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 :root{
 --main-bg-color: #000000;
 --txt-color-grey: #707070;
--txt-color-blue: #3C82F4;


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
    
    min-height: 100vh;
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
  background-color: #e6f0ef;
}
ul{
  list-style: none;
    padding: 0;
}
a {
  text-decoration-skip-ink: auto;
}
input,
button {
  font: inherit;
}
@font-face {
  font-family: "Poppins", sans-serif;
  src: url("./assets/fonts/Poppins-Regular.ttf") format("truetype");
  font-style: normal;
  font-weight: 400;
}
@font-face {
  font-family: "Poppins", sans-serif;
  src: url("./assets/fonts/Poppins-Medium.ttf") format("truetype");
  font-style: normal;
  font-weight: 500;
}
@font-face {
  font-family: "Poppins", sans-serif;
  src: url("./assets/fonts/Poppins-SemiBold.ttf") format("truetype");
  font-style: normal;
  font-weight: 600;
}

@font-face {
  font-family: "Poppins", sans-serif;
  src: url("./assets/fonts/Poppins-Bold.ttf") format("truetype");
  font-style: normal;
  font-weight: 700;
}

@font-face {
  font-family: "Poppins", sans-serif;
  src: url("./assets/fonts/Poppins-ExtraBold.ttf") format("truetype");
  font-style: normal;
  font-weight: 800;
}

`;

export default GlobalStyle;
