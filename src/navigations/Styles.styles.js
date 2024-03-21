import { background } from "native-base/lib/typescript/theme/styled-system";
import { StyleSheet } from "react-native";

export const styles = new StyleSheet.compose({
  stackNavigationStyles: {
    contentStyle: {
      backgroundColor: "#000",
    },
    headerStyle: {
      backgroundColor: "#000",
    },
    headerTitlesStyle: {
      color: "#fff",
    },
  },
  modalStyles: {
    contentStyle: {
      backgroundColor: "#171717",
    },
    headerStyle: {
      backgroundColor: "#171717",
    },
    headerTitleStyle: {
      color: "#fff",
    },
  },
});
