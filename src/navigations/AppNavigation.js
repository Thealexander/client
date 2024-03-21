import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabNavigation } from "./BottomTabNavigation";
import { screens } from "../Utils";
import {
  UserProfileScreen,
  CamaraScreen,
  ImageFullScreen,
} from "../screens/Global";
import { ChatScreen } from "../screens/chats";
import {
  GroupScreen,
  GroupProfile,
  AddUserGroup,
  ChangeNameGroup,
} from "../screens/Groups";
import { styles } from "./Styles.styles";

const Stack = createNativeStackNavigator();

export function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.tab.root}
        component={BottomTabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screens.global.chatScreen}
        component={ChatScreen}
        options={{ headerShown: false, ...styleSheet.stackNavigationStyles }}
      />
      <Stack.Screen
        name={screens.global.groupScreen}
        component={GroupScreen}
        options={{ headerShown: false, ...styleSheet.stackNavigationStyles }}
      />
      <Stack.Group
        screenOptions={{ presentation: "modal", ...styles.modalStyles }}
      >
        <Stack.Screen
          name={screens.global.userProfileScreen}
          component={UserProfileScreen}
          options={{ title: "User Information" }}
        />
        <Stack.Screen
          name={screens.global.groupProfileScreen}
          component={GroupProfile}
          options={{ title: "Group Information" }}
        />
        <Stack.Screen
          name={screens.global.addUserGroupScreen}
          component={AddUserGroup}
          options={{ title: "Add Participant" }}
        />
        <Stack.Screen
          name={screens.global.changeNameGroupScreen}
          component={ChangeNameGroup}
          options={{ title: "Change Group Name" }}
        />
        <Stack.Screen
          name={screens.global.cameraScreen}
          component={CameraScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={screens.global.imageFullScreen}
          component={ImageFullScreen}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
