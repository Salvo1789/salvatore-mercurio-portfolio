import { ENG_LANG } from "../action";

const initialState = {
    // checking mode from localstorage if falsey (e.g. 0, null, undefined, etc.) it will be false, otherwise true
    isEnglish: true,
  };

const languageReducer = (state = initialState, action) => {
    switch (action.type) {
      case ENG_LANG:
        return {
          ...state,
          // getting value from the action file and changing isdarkMode State.
          isEnglish: action.payload,
        };
      default:
        return state;
    }
  };

export default languageReducer;