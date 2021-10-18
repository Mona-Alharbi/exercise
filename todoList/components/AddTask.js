import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { addtask, loggedOut } from "../actions/index";
import React, { useState } from "react";
import { deletTasks } from "../actions/index";
import { Appbar } from "react-native-paper";

import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const AddTask = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const logout = () => {
    dispatch(loggedOut());
    dispatch(deletTasks());
    navigation.navigate("Registration");
  };
  const [task, setTask] = useState();
  const tasklist = useSelector((state) => state.task);

  const handleAddTask = () => {
    Keyboard.dismiss();
    dispatch(addtask(task));
    setTask(null);
    navigation.navigate("TodoList");
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <LinearGradient
      style={styles.container}
      //colors={["#ff512f", "#dd2476", "transparent"]}
      colors={["#ffff", " #83a4d4", "#83a4d4"]}
    >
      <Appbar.Header style={styles.AppbarHead}>
        <Appbar.Content title="Add Tasks" />

        <Appbar.Action icon="power" onPress={logout} />
      </Appbar.Header>

      <View style={styles.inputTask}>
        <Text style={styles.textStyle}> Hi {user.name} add a task</Text>

        <Image style={styles.image} source={require("../assets/task.png")} />

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TextInput
            style={styles.input}
            placeholder={"Write a task"}
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>Add</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </LinearGradient>
  );
};
{
  // props.route.params.user.userName;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },

  inputTask: {
    justifyContent: "center",
    marginTop: 70,
  },
  textStyle: {
    fontFamily: "Cochin",
    fontSize: 20,
    fontWeight: "bold",
    shadowColor: "#ffff",
    marginLeft: 90,
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    height: 60,
    paddingHorizontal: 15,
    margin: 15,
    borderColor: "#83a4d4",
    borderWidth: 2,
  },
  addWrapper: {
    width: "40%",
    borderRadius: 10,
    height: 45,
    // width: 60,
    // height: 60,
    marginLeft: 110,
    // borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#83a4d4",
    padding: 10,
    margin: 15,
    borderColor: "#83a4d4",
    borderWidth: 2,
  },

  AppbarHead: {
    backgroundColor: "#83a4d4",
  },
  image: {
    marginBottom: 10,
    width: 300,
    height: 200,
    justifyContent: "center",
    marginHorizontal: 30,
  },
});
export default AddTask;
