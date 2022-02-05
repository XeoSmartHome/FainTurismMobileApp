import React, { useEffect } from "react";
import {Provider as ReduxProvider} from "react-redux";
import {IntlProvider} from "react-intl";
import store from "./src/Store";
import RootNavigator from "./src/Navigators/RootNavigator";
import {useDispatch, useSelector} from "react-redux";
import { selectLocale } from "./src/Store/Language/selectors";
import { loadLocale } from "./src/Store/Language/actions";
import "intl";
import 'intl/locale-data/jsonp/en'; // or any other locale you need
import { Platform } from "react-native";


const WithRedux = () => {
  //const theme = useSelector(selectTheme);
  const locale = useSelector(selectLocale);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadLocale());
  }, [dispatch]);


  if (Platform.OS === "android") {
    if (typeof (Intl).__disableRegExpRestore === "function") {
      Intl.__disableRegExpRestore();
    }
  }

  return (
      <IntlProvider locale={locale} messages={[]}>
        <RootNavigator/>
      </IntlProvider>
  )
};


const App = () => {
  return (
    <ReduxProvider store={store}>
        <WithRedux/>
    </ReduxProvider>
  )
}


export default App;
