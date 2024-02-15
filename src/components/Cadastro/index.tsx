
import { useDispatch } from "react-redux"
import * as S from "./styles"
import { useState, FormEvent } from "react"
import { cadastrar } from "../store/reducers/cadastro"



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
    }

    return (
        <>
        <S.Titulo>Agenda de contatos</S.Titulo>
        <S.CampoCadastro>
            <form onSubmit={cadastrarTarefa}>
            <input value={nome} onChange={(evento) => setNome(evento.target.value)} type="text" placeholder="novo contato" />
            <input value={telefone} onChange={(evento) => setTelefone(evento.target.value)} type="text" placeholder="número de telefone" />
            <input value={email} onChange={(evento) => setEmail(evento.target.value)} type="text" placeholder="email" />
            <button type="submit">Cadastrar</button>
            </form>
        </S.CampoCadastro> 
        </>
    )
}

export default Cadastrando