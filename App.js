import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Login from "./pages/login";
import Register from "./pages/register/index";
import Dashboard from "./pages/dashboard";
import Transfer from "./pages/transfer";
import Fund from "./pages/fund";

export default function App() {
  return (
    // <View style={styles.container}>
    <Fund />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
