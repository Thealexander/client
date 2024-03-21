import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { NativeBaseProvider } from "native-base";
import { HandlerNavigation } from "./src/navigations";
import { AuthProvider } from "./src/contexts/AuthContext";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <AuthProvider>
          <HandlerNavigation />
        </AuthProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
