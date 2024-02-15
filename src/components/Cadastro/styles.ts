import styled from "styled-components";

export const Titulo = styled.h2`
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-style: normal;
    padding-top: 10px;
`

export const CampoCadastro = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 25px;

    input {
        border-radius: 5px;
        border: 1px solid #00d2d3;
        margin-left: 5px;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    button {
        margin-left: 5px;
        border-radius: 10px;
        border: 1px solid #00d2d3;
        width: 100px;
        height: 20px;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-style: normal;
        background-color: #ff9f43;
        cursor: pointer;

        &:hover {
            background-color: #feca57;
        }
    }
` 