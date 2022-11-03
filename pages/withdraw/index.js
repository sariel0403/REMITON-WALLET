import React from "react";
import { View } from "react-native";

import WithdrawField from "../../components/withdraw/withdrawfield";
import WithdrawImage from "../../components/withdraw/withdrawimage";

import styles from "./style";

const Withdraw = () => {
  return (
    <View style={styles.container}>
      <WithdrawImage />
      <WithdrawField />
    </View>
  );
};

export default Withdraw;
