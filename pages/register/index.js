import React from "react";
import { View } from "react-native";

import RegisterField from "../../components/signup/inputfield";
import Logo from "../../components/login/logo";

import styles from "./style";

const Register = () => {
  return (
    <View>
      <Logo />
      <RegisterField />
    </View>
  );
};

export default Register;
