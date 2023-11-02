import { combineReducers, configureStore } from '@reduxjs/toolkit'
import darkModeReducer from "../reducer/darkModeReducer";
import languageReducer from "../reducer/languageReducer";

// export default combineReducers({
//   darkMode: darkModeReducer,
// });

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  language: languageReducer
});

const store = configureStore({
reducer: rootReducer,
})

export default store