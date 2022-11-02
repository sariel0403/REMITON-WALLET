import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  inline: {
    flexDirection: "row",
  },
  currencyUnit: {
    color: "white",
    fontSize: 30,
  },
  currencyAmount: {
    color: "white",
    fontSize: 35,
  },
  USDField: {
    width: 150,
    height: 150,
    backgroundColor: "#02CD98",
    borderRadius: 15,
    padding: 15,
    margin: 15,
  },
  EURField: {
    width: 150,
    height: 150,
    backgroundColor: "#5351FC",
    borderRadius: 15,
    padding: 15,
    margin: 15,
  },
  ARSField: {
    width: 150,
    height: 150,
    backgroundColor: "#E54000",
    borderRadius: 15,
    padding: 15,
    margin: 15,
  },
  GBPField: {
    width: 150,
    height: 150,
    backgroundColor: "#F6B900",
    borderRadius: 15,
    padding: 15,
    margin: 15,
  },
});

export default styles;
