import React from "react";
import { View } from "react-native";

import FundField from "../../components/fund/fundfield";
import FundImage from "../../components/fund/fundimage";

import styles from "./style";

const Fund = () => {
  return (
    <View style={styles.container}>
      <FundImage />
      <FundField />
    </View>
  );
};

export default Fund;
