import { View, Text, Image, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { assets } from "../../../assets";
import { screens } from "../../../Utils";
import { styles } from "./AuthStartScreen.styles";
//import { useAuth } from "../../hooks";

export function AuthStartScreen() {
  //const auth = useAuth();
  //console.log(auth);
  const navigation = useNavigation();
  const goToLogin = () => {
    navigation.navigate(screens.auth.loginScreen);
  };

  return (
    <SafeAreaView style={styles.content}>
      <Image source={assets.image.jpg.auth} style={styles.img} />
      <View>
        <Text style={styles.title}>Te damos la bienvenida a bachatApp</Text>
        <Text style={styles.description}>
          Probando mi aplicacion de chat en React
        </Text>
        <Text style={styles.description}>
          Consulte nuestra politica de privacidad
        </Text>
        <Text style={styles.btn} onPress={goToLogin}>
          Aceptar y Continuar
        </Text>
      </View>
    </SafeAreaView>
  );
}
