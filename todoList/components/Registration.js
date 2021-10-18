import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loggedIn } from "../actions/index";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
} from "react-native";
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
//function Registration({ navigation,loggedIn,loggedOut,user }) {
function Registration({ navigation }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);
  const [input, setInput] = useState({
    name: "",
    password: "",
  });
  const [error, setError] = useState({
    name: "",
    password: "",
  });
  const handleInputSubmit = () => {
    if (input.name == "" && input.password == "") {
      setError({ ...error, name: "required", password: "required" });
    } else if (input.name != "") {
      if (input.password != "") {
        dispatch(loggedIn(input));
        setInput({ ...input, name: "", email: "", password: "" });
        setError({ ...error, name: "", password: "" });
        navigation.navigate("AddTask");
      } else setError({ ...error, password: "required" });
    } else setError({ ...error, name: "required" });
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={["#ffff", " #83a4d4", "#83a4d4"]}
    >
      <Text style={styles.textStyle}> welcome Todos app</Text>
      <Image style={styles.image} source={require("../assets/task.png")} />
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      ></KeyboardAvoidingView>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setInput({ ...input, name: text })}
          value={input.name}
        />
        {error.name != "" && (
          <Text style={{ color: "red" }}>{error.name} </Text>
        )}
      </View>
      {/* <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setInput({ ...input, email: text })}
          value={input.email}
        />
      </View> */}
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(text) => setInput({ ...input, password: text })}
          value={input.password}
        />
        {error.password != "" && (
          <Text style={{ color: "red" }}> {error.password}</Text>
        )}
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleInputSubmit}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  image: {
    marginBottom: 10,
    width: 290,
    height: 200,
    justifyContent: "center",
    marginTop: 20,
  },

  inputView: {
    // backgroundColor: "#FFC0CB",
    // borderRadius: 30,
    width: "70%",
    height: 45,
    // marginBottom: 20,
    // alignItems: "center",
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  loginBtn: {
    width: "50%",
    borderRadius: 10,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#83a4d4",
  },
  textStyle: {
    fontFamily: "Cochin",
    fontSize: 20,
    fontWeight: "bold",
    shadowColor: "#ffff",
  },
});
export default Registration;
