import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 300,
  },
  inline: {
    flexDirection: "row",
  },
  currencyFullName: {
    color: "white",
    fontSize: 30,
  },
  currencyUnit: {
    color: "white",
    fontSize: 30,
    paddingVertical: 5,
    paddingHorizontal: 20,
    margin: 5,
  },
  currencySymbol: {
    color: "white",
    fontSize: 30,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginVertical: 5,
  },
  currencyAmount: {
    color: "white",
    fontSize: 50,
  },
  tabview: {
    width: "100%",
    padding: 15,
  },
  USDField: {
    width: "100%",
    height: 200,
    backgroundColor: "#02CD98",
    borderRadius: 15,
  },
  EURField: {
    width: "100%",
    height: 200,
    backgroundColor: "#5351FC",
    borderRadius: 15,
  },
  ARSField: {
    width: "100%",
    height: 200,
    backgroundColor: "#E54000",
    borderRadius: 15,
  },
  GBPField: {
    width: "100%",
    height: 200,
    backgroundColor: "#F6B900",
    borderRadius: 15,
  },
});

export default styles;
