import React from "react";
import { View } from "react-native";

import WithdrawField from "../../components/withdraw/withdrawfield";

import styles from "./style";

const Withdraw = () => {
  return (
    <View style={styles.container}>
      <WithdrawField />
    </View>
  );
};

export default Withdraw;
