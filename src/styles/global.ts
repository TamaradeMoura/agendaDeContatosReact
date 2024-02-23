import styled, { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
        padding: 0;
        list-style: none;
    }

    body {
        background-color: #48dbfb;
    }

    .container {
        max-width: 1024px;
        width: 80%;
        margin: 50px auto;
    }
`

export const Botao = styled.button`
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #fff;
    padding: 5px 8px;
    border: none;
    cursor: pointer;
    margin-left: 5px;
    border-radius: 8px;
`

export default EstiloGlobal