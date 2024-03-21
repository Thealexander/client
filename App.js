import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { NativeBaseProvider } from "native-base";
import { HandlerNavigation } from "./src/navigations/HandlerNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <HandlerNavigation />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
