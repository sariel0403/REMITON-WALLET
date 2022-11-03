import React from "react";
import { View, Image } from "react-native";

import styles from "./style";

const FundImage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/fund.png")}
        style={styles.transferimg}
      />
    </View>
  );
};

export default FundImage;
