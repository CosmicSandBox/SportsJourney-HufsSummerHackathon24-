import { createGlobalStyle } from "styled-components";

// fonts
import GowunBatangBold from "../assets/fonts/GowunBatang-Bold.ttf";
import GowunBatangRegular from "../assets/fonts/GowunBatang-Regular.ttf";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'GowunBatang';
    src: local('GowunBatangBold') format('ttf');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'GowunBatang';
    src: local('GowunBatangRegular') format('ttf');
    font-weight: normal;
    font-style: normal;
}


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'GowunBatang';
  }
  
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  // 화면 너비가 389px 이하일 때
  @media (max-width: 389px) {
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background-color: #F6FCFF;
    }
  }

  // 화면 너비가 390px 이상일 때
  @media (min-width: 390px) {
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      //background-color: red;
      background-color: white;
    }

    #root {
      /* width: 100vw;
      max-width: 390px;
      height: 100vh; */

      /* 가로, 세로 크기 고정 */
      width: 390px;
      height: 844px; 
      margin: auto;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      //background-color: red;
      background-color: #F6FCFF;
      position: relative;
    }
  }
`;

export default GlobalStyle;