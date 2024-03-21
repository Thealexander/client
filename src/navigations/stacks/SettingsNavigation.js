import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  SettingsScreen,
  ChangeFirstNameScreen,
  ChangeLastName,
} from "../../screens/Settings";
import { screens } from "../../Utils";
import { styles } from "../Styles.styles";

export function SettingsNavigation() {
  return (
    <ScreenStack.Navigator screenOptions={{ ...styles.stackNavigationStyles }}>
      <Stack.Screen
        name={screens.tab.settings.settingScreen}
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screens.tab.settings.settingScreen}
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screens.tab.settings.changeFirstNameScreen}
        component={ChangeFirstNameScreen}
        options={{ title: "Change First Name", presentation: "modal" }}
      />
      <Stack.Screen
        name={screens.tab.settings.changeLastNameScreen}
        component={ChangeLastNameScreen}
        options={{ title: "Change Last Name", presentation: "modal" }}
      />
    </ScreenStack.Navigator>
  );
}
