import styles from "./styles";
import react, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore/lite";
import database from "../../config/firebaseConfig";
import { AntDesign } from "@expo/vector-icons";

export default function Task({ navigation }) {
  const [tasks, setTasks] = useState([]);

  const deleteTask = async (id) => {
    const taskDoc = doc(database, "Tasks", id);
    await deleteDoc(taskDoc);
  };

  useEffect(() => {
    const fetchData = async () => {
      const tasksCol = collection(database, "Tasks");
      const tasksSnapshot = await getDocs(tasksCol);
      const tasksList = tasksSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(tasksList);
    };
    fetchData().catch(console.error);
  }, [tasks]);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={tasks}
        renderItem={({ item }) => {
          return (
            <View style={styles.Tasks}>
              <TouchableOpacity
                style={styles.deleteTask}
                onPress={() => {
                  deleteTask(item.id);
                }}
              >
                <AntDesign name="close" size={23} color="#CB2C31" />
              </TouchableOpacity>
              <Text
                style={styles.descriptionTask}
                onPress={() => {
                  navigation.navigate("Details", {
                    id: item.id,
                    description: item.description,
                  });
                }}
              >
                {item.description}
              </Text>
            </View>
          );
        }}
      />

      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => navigation.navigate("New Task")}
      >
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
