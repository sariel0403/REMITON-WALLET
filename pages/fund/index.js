import React from "react";
import { View } from "react-native";

import FundField from "../../components/fund/fundfield";

import styles from "./style";

const Fund = () => {
  return (
    <View style={styles.container}>
      <FundField />
    </View>
  );
};

export default Fund;
