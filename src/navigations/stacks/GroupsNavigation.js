import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  GroupsScreen,
  CreateGroupScreen,
  GroupScreen,
} from "../../screens/Groups";
import { screens } from "../../Utils";
import { styles } from "../Styles.styles";

export  function GroupsNavigation() {
  return (
    <ScreenStack.Navigator screenOptions={{ ...styles.stackNavigationStyles }}>
      <Stack.Screen
        name={screens.tab.groups.groupsScreen}
        component={GroupsScreen}
        options={{ title: "Groups" }}
      />
      <Stack.Screen
        name={screens.tab.groups.createGroupScreen}
        component={CreateGroupScreen}
        options={{
          title: "Create Group",
          presentation: "modal",
          ...styles.modelStyles,
        }}
      />
    </ScreenStack.Navigator>
  );
}
