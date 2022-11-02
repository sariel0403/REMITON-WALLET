import React from "react";
import { View } from "react-native";

import InputField from "../../components/login/inputfield";
import Logo from "../../components/login/logo";

import styles from "./style";

const Login = () => {
  return (
    <View>
      <Logo />
      <InputField />
    </View>
  );
};

export default Login;
