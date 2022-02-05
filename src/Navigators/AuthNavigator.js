import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {useIntl} from "react-intl";
import SCREENS from "./Screens";
import SignInScreen from "../Screens/Auth/SignInScreen";


const Stack = createStackNavigator();


const AuthenticationNavigator = () => {
  const intl = useIntl();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SCREENS.AUTH.SIGN_IN.PATH}
        component={SignInScreen}
        options={{
          title: intl.formatMessage({id: SCREENS.AUTH.SIGN_IN.TITLE})
        }}
      />
      <Stack.Screen
        name={SCREENS.AUTH.SIGN_UP.PATH}
        component={SignInScreen}
        options={{
          title: intl.formatMessage({id: SCREENS.AUTH.SIGN_UP.TITLE})
        }}
      />
    </Stack.Navigator>
  );
};


export default AuthenticationNavigator;
