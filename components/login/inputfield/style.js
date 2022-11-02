import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 300,
  },
  usernameInput: {
    marginTop: 20,
    backgroundColor: "white",
  },
  passwordInput: {
    marginTop: 20,
    backgroundColor: "white",
  },
  inline: {
    marginTop: 20,
    flexDirection: "row",
    width: "100%",
  },
  signinBtn: {
    width: "50%",
    paddingRight: 15,
  },
  signupBtn: {
    width: "50%",
    paddingLeft: 15,
  },
});

export default styles;
