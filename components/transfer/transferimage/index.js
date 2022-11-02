import React from "react";
import { View, Image } from "react-native";

import styles from "./style";

const TransferImage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/money-transfer.png")}
        style={styles.transferimg}
      />
    </View>
  );
};

export default TransferImage;
