import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Login from "./pages/login";
import Register from "./pages/register/index";
import Dashboard from "./pages/dashboard";

export default function App() {
  return (
    <View style={styles.container}>
      <Dashboard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4F5267",
    alignItems: "center",
    justifyContent: "center",
  },
});
