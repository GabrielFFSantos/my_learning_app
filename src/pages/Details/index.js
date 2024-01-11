import styles from "./styles";
import react, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import database from "../../config/firebaseConfig";
import { collection, doc, updateDoc } from "firebase/firestore/lite";

export default function Details({ navigation, route }) {
  const [descriptionEdit, setDescriptionEdit] = useState(
    route.params.description
  );
  const idTask = route.params.id;

  const editTask = async () => {
    const taskDoc = doc(database, "Tasks", idTask);
    await updateDoc(taskDoc, {
      description: descriptionEdit,
      status: false,
    });
    navigation.navigate("Task");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Edit Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Estudar React-Native"
        onChangeText={setDescriptionEdit}
        value={descriptionEdit}
      />
      <TouchableOpacity style={styles.buttonNewTask} onPress={() => editTask()}>
        <Text style={styles.iconButton}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}
