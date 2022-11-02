import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

import styles from "./style";

const BalanceField = () => {
  return (
    <View>
      <View style={styles.inline}>
        <View style={styles.USDField}>
          <Text style={styles.currencyUnit}>USD</Text>
          <Text style={styles.currencyAmount}>1000</Text>
        </View>
        <View style={styles.EURField}>
          <Text style={styles.currencyUnit}>EUR</Text>
          <Text style={styles.currencyAmount}>500</Text>
        </View>
      </View>
      <View style={styles.inline}>
        <View style={styles.ARSField}>
          <Text style={styles.currencyUnit}>ARS</Text>
          <Text style={styles.currencyAmount}>300</Text>
        </View>
        <View style={styles.GBPField}>
          <Text style={styles.currencyUnit}>GBP</Text>
          <Text style={styles.currencyAmount}>800</Text>
        </View>
      </View>
    </View>
  );
};

export default BalanceField;
