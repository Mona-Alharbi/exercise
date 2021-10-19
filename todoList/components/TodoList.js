import { useDispatch, useSelector } from "react-redux";
import { loggedOut } from "../actions/index";
import { deletTasks } from "../actions/index";
import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native";
import Task from "./Task";
import { Appbar } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

// function mapStateToProps(state) {
//   return {
//     user: state.user,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     loggedIn: (name) => dispatch({ type: "LoggedIn", payload: name }),
//     loggedOut: () => dispatch({ type: "LoggedOut" }),
//   };
// }
const TodoList = ({ navigation }) => {
  const dispatch = useDispatch();
  const tasklist = useSelector((state) => state.task);
  console.log("tasklist");
  const logout = () => {
    dispatch(loggedOut());
    dispatch(deletTasks());
    navigation.navigate("Registration");
  };
  return (
    <LinearGradient
      style={styles.container}
      //colors={["#ff512f", "#dd2476", "transparent"]}
      colors={["#ffff", " #83a4d4", "#83a4d4"]}
    >
      <View>
        <Appbar.Header style={styles.AppbarHead}>
          <Appbar.Action
            icon="arrow-left"
            onPress={() => {
              navigation.navigate("AddTask");
            }}
          />
          <Appbar.Content title="My Tasks" />
          <Appbar.Action icon="power" onPress={logout} />
        </Appbar.Header>
        {/* Added this scroll view to enable scrolling when list gets longer than the page */}
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
          keyboardShouldPersistTaps="handled"
        >
          {/* Today's Tasks */}
          <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}>Tooooday's tasks</Text>
            <View style={styles.items}>
              {/* This is where the tasks will go! */}
              {tasklist.map((task, index) => {
                return <Task key={index} text={task} />;
              })}
            </View>
          </View>
        </ScrollView>
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
  AppbarHead: {
    backgroundColor: "#83a4d4",
  },
});
export default TodoList;
