import { useDispatch } from 'react-redux'
import CadastradosClass from '../../models/Cadastro'



import * as S from './styles'
import { useState } from 'react'
import { editar, remover } from '../store/reducers/cadastro'

type Props = CadastradosClass

const Cadastro = ({
    nome,
    telefone,
    email,
    id
}: Props) => {
    const dispatch = useDispatch()
    const [estaEditando, setEstaEditando] = useState(false)

    function cancelarEdicao() {
        setEstaEditando(false)
    }

    function SalvarEdição() {
        if (estaEditando === true) {
            dispatch(
                editar({
                    nome,
                    telefone,
                    email,
                    id
                })
            )
        }
    }

    return (
        <>
            <S.Card>
                <label htmlFor={nome}>
                    <h3>{estaEditando ? <input type="text" onChange={SalvarEdição} /> : <h3>{nome}</h3>}
                    {nome}</h3>
                </label>
                <label htmlFor={telefone}>
                    <h3>{estaEditando ? <input type="text" /> : <h3>{telefone}</h3>}
                    {telefone}</h3>
                </label>
                <label htmlFor={email}>
                    <h3>{estaEditando ? <input type="text" /> : <h3>{email}</h3>}
                    {email}</h3>
                </label>
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
                        } }
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