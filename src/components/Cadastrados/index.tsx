import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'


import { remover, editar } from '../../store/reducers/cadastros'
import CadastroClass from '../../models/Cadastro'


type Props = CadastroClass

const Cadastro = ({
    nome: nomeOriginal,
    telefone: telefoneOriginal,
    email: emailOriginal,
    id
}: Props) => {
    const dispatch = useDispatch()
    const [estaEditando, setEstaEditando] = useState(false)
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        if (nomeOriginal.length, telefoneOriginal.length, emailOriginal.length > 0) {
            setNome(nomeOriginal)
            setTelefone(telefoneOriginal)
            setEmail(emailOriginal)
        }
    }, [nomeOriginal, telefoneOriginal, emailOriginal])

    function cancelarEdicao() {
        setEstaEditando(false)
        setNome(nomeOriginal)
        setTelefone(telefoneOriginal)
        setEmail(emailOriginal)
    }



    return (
        <>
            <S.Card>
                <S.Cad
                disabled={!estaEditando}
                value={nome}
                onChange={(evento) => setNome(evento.target.value)}
                />
                <S.Cad
                disabled={!estaEditando}
                value={telefone}
                onChange={(evento) => setTelefone(evento.target.value)}
                />
                <S.Cad
                disabled={!estaEditando}
                value={email}
                onChange={(evento) => setEmail(evento.target.value)}
                />
                <div>
                    {estaEditando ? (
                        <><S.BotaoSalvar onClick={() => {
                            dispatch(
                                editar({
                                    nome,
                                    telefone,
                                    email,
                                    id
                                })
                            )
                            setEstaEditando(false)
                        }}
                        >Salvar</S.BotaoSalvar><S.BotaoCancelarRemover onClick={cancelarEdicao}>cancelar</S.BotaoCancelarRemover></>
                    ): (
                        <>
                        <S.BotaoEditar onClick={() => setEstaEditando(true)}>Editar</S.BotaoEditar>
                        <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>Remover</S.BotaoCancelarRemover> 
                        </>
                    )}
                </div>
            </S.Card>
        </>
    )
}




export default Cadastro

