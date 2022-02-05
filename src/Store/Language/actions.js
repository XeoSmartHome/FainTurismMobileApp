//import SecureStorage from "react-native-secure-storage";
//import {LOCALES} from "../../Internalization";

export const setLocale = (locale) => {
    //SecureStorage.setItem('locale', locale);
    return ({
        type: 'SET_LOCALE',
        payload: {locale},
    });
};


const loadLocaleSuccess = (locale) => ({
    type: 'SET_LOCALE',
    payload: {locale},
})


export const loadLocale = () => (dispatch) => {
    /*SecureStorage.getItem('locale').then(
        (locale) => {
            if (LOCALES[locale]) {
                dispatch(loadLocaleSuccess(locale));
            }
        }
    );*/
};
