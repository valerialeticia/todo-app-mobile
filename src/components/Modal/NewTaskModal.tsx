import {
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Theme } from "../../themes";

const close = require("../../../assets/close.png");

export function NewTaskModal() {
  return (
    <Modal transparent>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>New task</Text>
            <TouchableOpacity
              hitSlop={{ top: 20, left: 20, right: 20, bottom: 20 }} // melhora região de toque para fechar o modal.
            >
              <Image
                source={close}
                style={styles.closeImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.modalContent}>
            <TextInput
              placeholder="Enter a task name here..."
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
              style={styles.textInput}
            />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "80%",
    height: 200,
    backgroundColor: "#fff",
    borderRadius: 4,
    elevation: 0.5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.15,
  },
  header: {
    width: "100%",
    height: 50,
    backgroundColor: Theme.colors.primary,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  closeImage: {
    width: 14,
    height: 14,
  },
  textInput: {
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  modalContent: {
    padding: 20,
  },
});
