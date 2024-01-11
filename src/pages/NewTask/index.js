import styles from "./styles";
import react, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import database from "../../config/firebaseConfig";
import { collection, addDoc } from "firebase/firestore/lite";

export default function NewTask({ navigation }) {
  const [description, setDescription] = useState(null);

  const addTask = async () => {
    const tasksCol = collection(database, "Tasks");
    const newTask = {
      description: description,
      status: false,
    };
    const newTaskRef = await addDoc(tasksCol, newTask);
    navigation.navigate("Task");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Estudar React-Native"
        onChangeText={setDescription}
        value={description}
      />
      <TouchableOpacity style={styles.buttonNewTask} onPress={() => addTask()}>
        <Text style={styles.iconButton}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}
