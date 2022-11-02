import React from "react";
import { View, Button } from "react-native";
import { TextInput, RadioButton, Text } from "react-native-paper";

import styles from "./style";

const TransferField = () => {
  const [routNumber, setRoutNumber] = React.useState("");
  const [currencyUnit, setCurrencyUnit] = React.useState("USD");
  const [amount, setAmount] = React.useState(0);

  return (
    <View style={styles.container}>
      <TextInput
        label="Rout Number"
        value={routNumber}
        onChangeText={(newNumber) => setRoutNumber(newNumber)}
        style={styles.addressField}
        mode="outlined"
      />
      <TextInput
        label="Amount"
        value={amount}
        onChangeText={(newAmount) => setAmount(newAmount)}
        style={styles.amountField}
        mode="outlined"
      />
      <View style={styles.selectCurrencyUnit}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontSize: 20, color: "#00B4F0" }}>Select Unit</Text>
        </View>
        <View>
          <RadioButton.Group
            onValueChange={(newCurrencyUnit) =>
              setCurrencyUnit(newCurrencyUnit)
            }
            value={currencyUnit}
          >
            <View style={styles.inline}>
              <RadioButton.Item
                label="USD"
                value="USD"
                uncheckedColor="#00B4F0"
                labelStyle={{ color: "#00B4F0" }}
              />
              <RadioButton.Item
                label="GBP"
                value="GBP"
                uncheckedColor="#00B4F0"
                labelStyle={{ color: "#00B4F0" }}
              />
            </View>
            <View style={styles.inline}>
              <RadioButton.Item
                label="EUR"
                value="EUR"
                uncheckedColor="#00B4F0"
                labelStyle={{ color: "#00B4F0" }}
              />
              <RadioButton.Item
                label="ARS"
                value="ARS"
                uncheckedColor="#00B4F0"
                labelStyle={{ color: "#00B4F0" }}
              />
            </View>
          </RadioButton.Group>
        </View>
      </View>
      <Button title="Send" style={styles.sendBtn}></Button>
    </View>
  );
};

export default TransferField;
