import { useIntl } from "react-intl";
import { createStackNavigator } from "@react-navigation/stack";
import SCREENS from "./Screens";
import HomeScreen from "../Screens/Home/HomeScreen";


const Stack = createStackNavigator();


const MainStackNavigator = () => {
  const intl = useIntl();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SCREENS.HOME.PATH}
        component={HomeScreen}
        options={{
          headerTitle: SCREENS.HOME.TITLE
        }}
      />
    </Stack.Navigator>
  )
};


export default MainStackNavigator;
