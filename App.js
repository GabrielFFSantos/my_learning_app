import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tasks from "./src/pages/Tasks/index";
import NewTasks from "./src/pages/NewTask/index";
import Details from "./src/pages/Details/index";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Task">
        <Stack.Screen
          name="Task"
          component={Tasks}
          options={{
            headerTintColor: "#CB2C31",
          }}
        />
        <Stack.Screen
          name="New Task"
          component={NewTasks}
          options={{
            headerTintColor: "#CB2C31",
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTintColor: "#CB2C31",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
