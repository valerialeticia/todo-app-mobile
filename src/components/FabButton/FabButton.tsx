import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Theme } from "../../themes";

const plus = require("../../../assets/plus.png");

export function FabButton() {
  return (
    <TouchableOpacity activeOpacity={0.2} style={styles.container}>
      <Image source={plus} style={styles.plusIcon} resizeMode="contain" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.primaryDark,
    borderRadius: 47,
    width: 47,
    height: 47,
    justifyContent: "center",
    alignItems: "center",
    shadowRadius: 0.5,
    elevation: 0.5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
  },
  plusIcon: {
    width: 14,
    height: 14,
  },
});
