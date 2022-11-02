import React from "react";
import { View, Button } from "react-native";
import { TextInput, RadioButton, Text } from "react-native-paper";

import styles from "./style";

const TransferField = () => {
  const [address, setAddress] = React.useState("");
  const [currencyUnit, setCurrencyUnit] = React.useState("USD");
  const [amount, setAmount] = React.useState(0);

  return (
    <View style={styles.container}>
      <TextInput
        label="Address"
        value={address}
        onChangeText={(newAddress) => setAddress(newAddress)}
        style={styles.addressField}
      />
      <TextInput
        label="Amount"
        value={amount}
        onChangeText={(newAmount) => setAmount(newAmount)}
        style={styles.amountField}
      />
      <View style={styles.selectCurrencyUnit}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontSize: 20, color: "white" }}>Select Unit</Text>
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
                uncheckedColor="white"
                labelStyle={{ color: "white" }}
              />
              <RadioButton.Item
                label="GBP"
                value="GBP"
                uncheckedColor="white"
                labelStyle={{ color: "white" }}
              />
            </View>
            <View style={styles.inline}>
              <RadioButton.Item
                label="EUR"
                value="EUR"
                uncheckedColor="white"
                labelStyle={{ color: "white" }}
              />
              <RadioButton.Item
                label="ARS"
                value="ARS"
                uncheckedColor="white"
                labelStyle={{ color: "white" }}
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
