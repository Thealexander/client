import { ChevronLeftIcon, IconButton } from "native-base";
import { useNavegation } from "@react-navigation/native";

export function IconBack() {
  const navigation = useNavegation();

  return (
    <IconButton
      icon={<ChevronLeftIcon />}
      padding={0}
      onPress={navigation.goBack}
    />
  );
}
