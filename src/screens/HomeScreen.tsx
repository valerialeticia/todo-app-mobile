import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Theme } from "../themes";
import { FabButton, NoTasksCards } from "../components";

const logo = require("../../assets/logo.png");

export function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <NoTasksCards />
        <FabButton />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Theme.colors.primary,
  },
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  logo: {
    width: 227,
    height: 46,
    alignSelf: "center",
    marginBottom: 20,
  },
});
