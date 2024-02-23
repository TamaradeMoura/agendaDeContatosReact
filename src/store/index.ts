import { configureStore } from '@reduxjs/toolkit'

import cadastrosReducer from './reducers/cadastros'

const store = configureStore({
    reducer: {
        cadastro: cadastrosReducer
    }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store