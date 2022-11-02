import React from "react";
import { View, Button } from "react-native";
import { TextInput } from "react-native-paper";

import styles from "./style";

const RegisterField = () => {
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <TextInput
        label="Username"
        value={username}
        onChangeText={(newUsername) => setUsername(newUsername)}
        style={styles.usernameInput}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
        style={styles.passwordInput}
      />
      <TextInput
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={(newConfirmPassword) =>
          setConfirmPassword(newConfirmPassword)
        }
        style={styles.confirmPasswordInput}
      />
      <View style={styles.inline}>
        <View style={styles.signupBtn}>
          <Button title="Sign Up" />
        </View>
        <View style={styles.signinBtn}>
          <Button color="#f194ff" title="Sign In" />
        </View>
      </View>
    </View>
  );
};

export default RegisterField;
