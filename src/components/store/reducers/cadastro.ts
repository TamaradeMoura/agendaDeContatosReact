import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Cadastro from '../../../models/Cadastro'

type CadastroSlice = {
    itens: Cadastro[]
}

const initialState: CadastroSlice = {
    itens: [
        {
            id: 1,
            nome: 'Sarah',
            telefone: '5165251585',
            email: 'sarah@email.com'
        }
    ]
}

const CadastroSlice = createSlice({
    name: 'cadastro',
    initialState,
    reducers: {
        remover: (state, action: PayloadAction<number>) => {
            state.itens = [
                ...state.itens.filter((cadastro) => cadastro.id  !== action.payload)
            ]
        },
        editar: (state, action: PayloadAction<Cadastro>) => {
            const indexDoCadastro = state.itens.findIndex(
                (c) => c.id === action.payload.id
            )

            if (indexDoCadastro >=0) {
                state.itens[indexDoCadastro] = action.payload
            }
        },
        cadastrar: (state, action: PayloadAction<Omit<Cadastro, 'id'>>) => {
            const cadastroJaExiste = state.itens.find(
                (cadastro) => cadastro.nome.toLowerCase() === action.payload.nome.toLowerCase()
            )

            if (cadastroJaExiste) {
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

export const { remover, editar, cadastrar } = CadastroSlice.actions

export default CadastroSlice.reducer