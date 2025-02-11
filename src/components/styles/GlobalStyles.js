import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #111;
    color: white;
  }

  button {
    background-color: #ff9800;
    border: none;
    padding: 10px 20px;
    color: black;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
  }

  button:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;

export default GlobalStyles;
