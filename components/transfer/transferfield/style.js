import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { width: 300 },
  addressField: {
    marginBottom: 20,
  },
  amountField: {
    marginBottom: 20,
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
    color: "white",
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
