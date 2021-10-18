import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Task from "./components/Task";
import Registration from "./components/Registration";
import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Store";
import React from "react";
import { Provider } from "react-redux";
import { StyleSheet } from "react-native";
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Registration"
            screenOptions={{
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: "#0080ff",
              },
              headerTintColor: "#ffffff",
              headerTitleStyle: {
                fontSize: 25,
                fontWeight: "bold",
              },
            }}
          >
            <Stack.Screen
              name="Registration"
              component={Registration}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="TodoList"
              component={TodoList}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="AddTask"
              component={AddTask}
              options={{
                headerShown: false,
              }}
              // initialParams={{ name: "value" }}
            />
            <Stack.Screen
              name="Task"
              component={Task}
              options={{
                headerShown: false,
              }}
              // initialParams={{ name: "value" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
});
