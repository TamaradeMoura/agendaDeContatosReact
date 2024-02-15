import { Provider } from "react-redux"
import Cadastro from "./components/Cadastrados"
import Cadastrando from "./components/Cadastro"
import EstiloGlobal from "./styles/global"
import Store from "./components/store/reducers"




function App() {

  return (
    <Provider store={
      Store
    }>
      <EstiloGlobal />
      <div className="container">
        <Cadastrando />
        <Cadastro nome={""} telefone={""} id={0}/>
      </div>
    </Provider>
  )
}

export default App
