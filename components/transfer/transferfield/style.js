import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { width: 300 },
  addressField: {
    marginBottom: 20,
    backgroundColor: "white",
  },
  amountField: {
    marginBottom: 20,
    backgroundColor: "white",
  },
  selectCurrencyUnit: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inline: {
    flexDirection: "row",
  },
  currencyUnit: {
    marginTop: 8,
    color: "#00B4F0",
  },
  left: {
    width: "50%",
  },
  right: {
    width: "50%",
  },
  sendBtn: {
    paddingTop: 50,
  },
});

export default styles;
