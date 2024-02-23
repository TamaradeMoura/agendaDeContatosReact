import styled from "styled-components";
import { Botao } from "../../styles/global";

export const Card = styled.div`
    background-color: #dff9fb;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 10px;
    
    margin-top: 30px;
    border-radius: 16px;
    display: flex;
    justify-content: space-evenly;
`

export const Cad = styled.input`
    background-color: #dff9fb;
    border: none;
    color: #000;
`

export const BotaoCancelarRemover = styled(Botao)`
    background-color: #eb4d4b;
`

export const BotaoSalvar = styled(Botao)`
    background-color: #6ab04c;
`
export const BotaoEditar = styled(Botao)`
    background-color: #f9ca24;
`
