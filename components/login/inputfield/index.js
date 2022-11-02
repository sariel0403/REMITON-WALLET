import React from "react";
import { View, Button } from "react-native";
import { TextInput } from "react-native-paper";

import styles from "./style";

const InputField = () => {
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [securePwd, setSecurePwd] = React.useState(true);

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
        secureTextEntry={securePwd}
        right={
          <TextInput.Icon
            icon={securePwd == true ? "eye" : "eye-off"}
            onPress={() => setSecurePwd(!securePwd)}
          />
        }
        style={styles.passwordInput}
      />
      <View style={styles.inline}>
        <View style={styles.signinBtn}>
          <Button title="Sign In" />
        </View>
        <View style={styles.signupBtn}>
          <Button title="Sign Up" />
        </View>
      </View>
    </View>
  );
};

export default InputField;
