const initialState = {
    locale: 'en-US',
};


const languageReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case 'SET_LOCALE':
            return {...state, locale: payload.locale};
        default:
            return state;
    }
};


export default languageReducer;
