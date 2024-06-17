import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Theme } from "../../themes";

type Props = {
  label: string;
};

export function Buttons({ label }: Props) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    paddingVertical: 10,
  },
  text: {
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 20,
  },
});
