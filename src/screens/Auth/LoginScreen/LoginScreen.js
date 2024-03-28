import { View, Text } from "react-native";
import { useNavigation } from "./@react-navigation/native";
import { screens } from "../../../Utils";
import { styles } from "./LoginScreen.styles";

export function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Log In and Start to Chat</Text>
      {/*TODO: Login Form*/}
      <Text style={{ color: "#fff" }}>Login Form</Text>
      <Text style={styles.register} onPress={gotoRegister}>
        Sign Up
      </Text>
      <Text style={styles.info}>You need to be +18 years old to Sign Up</Text>
    </View>
  );
}
