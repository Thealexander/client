import { View, Text } from "react-native";
import { styles } from "./RegisterScreen.style";
import { useNavigation } from "./@react-navigation/native";
import {RegisterForm} from "../../../componentes/auth";


export function RegisterScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.content}>
      <Text style={styles.title}>RegisterScreen</Text>
      <RegisterForm />
      

      <Text style={styles.register} onPress={navigation.goBack}>
        Log In
      </Text>
    </View>
  );
}
