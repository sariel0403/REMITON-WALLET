import React from "react";
import { View, Button } from "react-native";
import { TextInput, RadioButton, Text } from "react-native-paper";

import styles from "./style";

const FundField = () => {
  const [routNumber, setRoutNumber] = React.useState("");
  const [currencyUnit, setCurrencyUnit] = React.useState("paypal");
  const [amount, setAmount] = React.useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.selectCurrencyUnit}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontSize: 20, color: "#00B4F0" }}>Select Card</Text>
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
                label="Paypal"
                value="paypal"
                uncheckedColor="#00B4F0"
                labelStyle={{ color: "#00B4F0" }}
              />
              <RadioButton.Item
                label="Other"
                value="other"
                uncheckedColor="#00B4F0"
                labelStyle={{ color: "#00B4F0" }}
              />
            </View>
          </RadioButton.Group>
        </View>
      </View>
      <TextInput
        label="Card Number"
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
      <Button title="Charge" style={styles.sendBtn}></Button>
    </View>
  );
};

export default FundField;
