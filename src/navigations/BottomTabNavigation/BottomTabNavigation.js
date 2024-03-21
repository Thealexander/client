import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  ChatNavigation,
  ChatsNavigation,
  GroupsNavigation,
  SettingsNavigation,
} from "../stacks";
import { screens } from "../../Utils";
import { styles } from "./BottomTabNavigation.styles";

const Tab = createBottomTabNavigator();

export function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarInactiveTintColor: "#646464",
        tabBarActiveTintColor: "#0891b2",
        tabBarIcon: ({ color, size }) => screenIcon(route, color, size),
      })}
    >
      <Tab.Screen
        name={screens.tab.chats.root}
        component={ChatsNavigation}
        options={{ title: "Chats" }}
      />
      <Tab.Screen
        name={screens.tab.groups.root}
        component={GroupsNavigation}
        options={{ title: "Groups" }}
      />
      <Tab.Screen
        name={screens.tab.settings.root}
        component={SettingsNavigation}
        options={{ title: "Settings" }}
      />
    </Tab.Navigator>
  );
}

function screenIcon(route, color, size) {
  const iconMap = {
    [screens.tab.chats.root]: "chat",
    [screens.tab.groups.root]: "account-group",
    [screens.tab.settings.root]: "cog-outline",
  };
  //TODO: revisar si funciono este Map
  let iconName = iconMap[route.name];
  /*
if (route.name === screens.tab.chats.root){ iconName = "chat";}
if (route.name === screens.tab.groups.root){ iconName = "account-group";}
if (route.name === screens.tab.settings.root){ iconName = "cog-outline";}
 */

  return (
    <Icon
      as={MaterialCommunityIcons}
      name={iconName}
      color={color}
      size={size}
    />
  );
}
