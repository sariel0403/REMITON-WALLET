import React from "react";
import { View, Image } from "react-native";

import styles from "./style";

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../../assets/logo.png")} />
    </View>
  );
};

export default Logo;
