export const DARK_MODE = "DARK_MODE";
export const ENG_LANG = "ENG_LANG";

export const handledarkMode = (e) => async (dispatch) => {
    // getting the true or false value from the parameter and saving that to localstorage
    // localStorage.setItem("darkmode", e);
  
    //dispatch data to reducer to be accessed as payload.action
    dispatch({
      type: DARK_MODE,
      payload: e,
    });
  };

  export const handleLanguage = (e) => async (dispatch) => {
    // getting the true or false value from the parameter and saving that to localstorage
    // localStorage.setItem("darkmode", e);
  
    //dispatch data to reducer to be accessed as payload.action
    dispatch({
      type: ENG_LANG,
      payload: e,
    });
  };