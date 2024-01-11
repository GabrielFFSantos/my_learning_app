import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
  label: {
    width: "90%",
    marginTop: 20,
    fontSize: 16,
    marginLeft: 20,
    color: "#CB2C31",
  },
  input: {
    width: "90%",
    marginTop: 10,
    padding: 10,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#CB2C31",
    marginLeft: "auto",
    marginRight: "auto",
  },
  buttonNewTask: {
    width: 60,
    height: 60,
    backgroundColor: "#CB2C31",
    position: "absolute",
    bottom: 30,
    right: 30,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  iconButton: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
