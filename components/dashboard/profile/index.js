import React from "react";
import { View } from "react-native";
import { Text, Avatar } from "react-native-paper";

import styles from "./style";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Avatar.Text size={150} label="JK" />
      <Text style={{ color: "white", fontSize: 50 }}>Jack King</Text>
      <Text style={{ color: "#2c2f43", fontSize: 25 }}>12345678</Text>
    </View>
  );
};

export default Profile;
