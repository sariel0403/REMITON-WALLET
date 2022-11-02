import React from "react";
import { View } from "react-native";
import { Text, Avatar } from "react-native-paper";

import styles from "./style";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Avatar.Text size={150} label="JK" style={styles.avatar} />
      <Text style={styles.username}>Jack King</Text>
      <Text style={styles.routnumber}>12345678</Text>
    </View>
  );
};

export default Profile;
