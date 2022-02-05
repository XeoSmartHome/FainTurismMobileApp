import { useIntl } from "react-intl";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SCREENS from "./Screens";
import HomeScreen from "../Screens/Home/HomeScreen";


const Stack = createNativeStackNavigator();


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
