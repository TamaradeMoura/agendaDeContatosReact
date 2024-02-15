import { configureStore } from "@reduxjs/toolkit";
import cadastrosReducer from './cadastro'


const Store = configureStore({
    reducer: {
        cadastros: cadastrosReducer
    }
})

export type RootReducer = ReturnType<typeof Store.getState>

export default Store