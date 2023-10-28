export const THEME_SET = "THEME_SET";
export const LANGUAGE_SET = "LANGUAGE_SET";

export const setThemeAction = (arg) => {
    
    return{
        type: THEME_SET,
        payload: !arg
    };
}

export const setLanguageAction = (arg) => {
    
    return{
        type: LANGUAGE_SET,
        payload: arg
    };
};