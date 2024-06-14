import { Image, StyleSheet, Text, View } from "react-native";

const check = require("../../../assets/big-check.png");

export function NoTasksCards() {
  return (
    <>
      <View style={styles.container}>
        <Image source={check} style={styles.check} />
        <Text style={styles.text}>No tasks</Text>
      </View>

      <Text style={styles.smallText}>You're free to enjoy the day</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    borderRadius: 4,
  },
  check: {
    marginVertical: 10,
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  smallText: {
    width: 150,
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
    alignSelf: "center",
    paddingVertical: 10,
  },
});
