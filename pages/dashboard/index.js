import React from "react";
import { View } from "react-native";

import Profile from "../../components/dashboard/profile";
import BalanceField from "../../components/dashboard/balancefield";

import styles from "./style";

const Dashboard = () => {
  return (
    <View>
      <Profile />
      <BalanceField />
    </View>
  );
};

export default Dashboard;
