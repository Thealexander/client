import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChatsScreen, CreateChatScreen } from "../../screens/chats";
import { screens } from "../../Utils";
import { styles } from "./Styles.styles";

const Stack = createNativeStackNavigator();

export function ChatsNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        ...styles.stackNavigationStyles,
      }}
    >
      <Stack.Screen
        name={screen.tab.chats.ChatsScreen}
        component={ChatsScreen}
        options={{ title: "Chats" }}
      />
      <Stack.Screen
        name={screen.tab.chats.createChatScreen}
        component={CreateChatScreen}
        options={{
          title: "Nuevo Chat",
          presentation: "model",
          ...styles.modalStyles,
        }}
      />
    </Stack.Navigator>
  );
}
