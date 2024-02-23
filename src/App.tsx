import  store  from "./store" 
import { Provider } from "react-redux"
import Cadastrando from "./components/Cadastro"
import ListadeCadastros from "./components/ListadeContatos"
import EstiloGlobal from "./styles/global"




function App() {

  return (
    <Provider store={store}>
      <EstiloGlobal />
      <div className="container">
        <Cadastrando />
        <ListadeCadastros/>
      </div>
    </Provider>
  )
}

export default App
