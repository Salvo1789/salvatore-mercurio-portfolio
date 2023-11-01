import { combineReducers, configureStore } from '@reduxjs/toolkit'
import darkModeReducer from "../reducer";

// export default combineReducers({
//   darkMode: darkModeReducer,
// });

const rootReducer = combineReducers({
  mainReducer: darkModeReducer,
});

const store = configureStore({
reducer: rootReducer,
})

export default store