import { combineReducers, configureStore } from '@reduxjs/toolkit'
import mainReducer from '../reducer'

const rootReducer = combineReducers({
    mainReducer: mainReducer,
});

const store = configureStore({
  reducer: rootReducer,
})

export default store