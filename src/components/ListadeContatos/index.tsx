import { useSelector } from "react-redux";
import Cadastro from "../Cadastrados";

import { RootReducer } from '../../store'

const ListadeCadastros = () => {
    const { itens } = useSelector((state: RootReducer) => state.cadastro)

    return (
        <main>
            <ul>
                {itens.map((c) =>
                <li key={c.nome}>
                    <Cadastro
                    nome={c.nome}
                    telefone={c.telefone}
                    email={c.email}
                    id={c.id} 
                    />
                </li>
                )}
            </ul>
        </main>
    )
}

export default ListadeCadastros