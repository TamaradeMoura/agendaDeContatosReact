import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cadastro from "../../models/Cadastro";

type CadastroState = {
    itens: Cadastro []
}

const initialState: CadastroState = {
    itens: []
}

const cadastrosSlice = createSlice({
    name: 'cadastros',
    initialState,
    reducers: {
        remover: (state, action: PayloadAction<number>) => {
            state.itens = state.itens.filter(cadastro => cadastro.id !== action.payload)
        },
        editar: (state, action: PayloadAction<Cadastro>) => {
            const indexDoContato = state.itens.findIndex(
                (c) => c.id === action.payload.id
            )

            if (indexDoContato >= 0) {
                state.itens[indexDoContato] = action.payload
            }
        },
        cadastrar: (state, action: PayloadAction<Omit<Cadastro, 'id'>>) => {
            const cadastroJaExistente = state.itens.find(
                (cadastro) => cadastro.nome.toLowerCase() === action.payload.nome.toLowerCase()
            )

            if (cadastroJaExistente) {
                alert('Já existe um cadastro com esse nome')
            } else {
                const ultimoCadastro = state.itens[state.itens.length - 1]

                const cadastroNovo = {
                    ...action.payload,
                    id: ultimoCadastro ? ultimoCadastro.id + 1 : 1
                }
                state.itens.push(cadastroNovo)
            }
        }
    }
})

export const { remover, editar, cadastrar } = cadastrosSlice.actions

export default cadastrosSlice.reducer