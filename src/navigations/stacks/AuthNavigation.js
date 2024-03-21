import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AuthStartScreen,
  LoginScreen,
  RegisterScreen,
} from "../../screens/Auth";
import { IconBack } from "../../componentes/navigation";
import { screens } from "../../Utils";
import { styles } from "../Styles.styles";

const stack = createNativeStackNavigator();

export function AuthNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        ...styles.stackNavigationStyles,
        headerLeft: IconBack,
      }}
    >
      <Stack.Screen
        name={screens.auth.authStartScreen}
        component={AuthStartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screens.auth.loginScreen}
        component={LoginScreen}
        options={{ title: "Log In" }}
      />
      <Stack.Screen
        name={screens.auth.registerScreen}
        component={RegisterScreen}
        options={{ title: "Register" }}
      />
    </Stack.Navigator>
  );
}
