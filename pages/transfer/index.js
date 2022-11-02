import React from "react";
import { View } from "react-native";

import TransferField from "../../components/transfer/transferfield";
import TransferImage from "../../components/transfer/transferimage";

import styles from "./style";

const Transfer = () => {
  return (
    <View style={styles.container}>
      <TransferImage />
      <TransferField />
    </View>
  );
};

export default Transfer;
