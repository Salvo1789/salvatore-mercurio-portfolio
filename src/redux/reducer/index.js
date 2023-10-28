import { THEME_SET } from '../action';
import { LANGUAGE_SET } from '../action';

const initialState = {
    theme: false,
    language: "it"
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
      case THEME_SET:
        return {
          ...state,
          theme: action.payload,
        };
      case LANGUAGE_SET:
        return {
          ...state,
          language: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default mainReducer;