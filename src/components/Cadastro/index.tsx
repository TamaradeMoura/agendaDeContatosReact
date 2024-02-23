import { useState, FormEvent } from "react"
import { useDispatch } from "react-redux"

import { cadastrar } from '../../store/reducers/cadastros'

import * as S from "./styles"




function Cadastrando() {
    const dispatch = useDispatch()

    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')

    const cadastrarTarefa = (evento: FormEvent) => {
        evento.preventDefault()

        dispatch(
            cadastrar({
                nome,
                telefone,
                email
            })

        )

        setNome('')
        setTelefone('')
        setEmail('')
    }

    return (
        <>
        <S.Titulo>Agenda de contatos</S.Titulo>
        <S.CampoCadastro>
            <form onSubmit={cadastrarTarefa}>
            <input value={nome} onChange={(evento) => setNome(evento.target.value)} type="text" placeholder="novo contato" required />
            <input value={telefone} onChange={(evento) => setTelefone(evento.target.value)} type="tel" placeholder="número de telefone" required />
            <input value={email} onChange={(evento) => setEmail(evento.target.value)} type="email" placeholder="email" required />
            <button type="submit">Cadastrar</button>
            </form>
        </S.CampoCadastro> 
        </>
    )
}

export default Cadastrando