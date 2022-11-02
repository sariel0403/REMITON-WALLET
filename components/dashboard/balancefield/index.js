import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { Tab, TabView } from "@rneui/themed";

import styles from "./style";

const BalanceField = () => {
  const [index, setIndex] = React.useState(0);

  return (
    <View>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "#000000",
          // borderBottomColor: "green",
          // borderWidth: 1,
        }}
      >
        <Tab.Item
          title="USD"
          titleStyle={(active) => ({
            color: active ? "#FF4B00" : "#00B4F0",
            fontSize: 22,
          })}
        />
        <Tab.Item
          title="GBP"
          titleStyle={(active) => ({
            color: active ? "#FF4B00" : "#00B4F0",
            fontSize: 22,
          })}
        />
        <Tab.Item
          title="ARS"
          titleStyle={(active) => ({
            color: active ? "#FF4B00" : "#00B4F0",
            fontSize: 22,
          })}
        />
        <Tab.Item
          title="EUR"
          titleStyle={(active) => ({
            color: active ? "#FF4B00" : "#00B4F0",
            fontSize: 22,
          })}
        />
      </Tab>
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={styles.tabview}>
          <Card style={styles.USDField}>
            <Card.Content>
              <Text style={styles.currencyFullName}>United States Dollar</Text>
              <View style={styles.inline}>
                <Text style={styles.currencySymbol}>$</Text>
                <Text style={styles.currencyUnit}>USD</Text>
              </View>
              <Text style={styles.currencyAmount}>1000</Text>
            </Card.Content>
          </Card>
        </TabView.Item>
        <TabView.Item style={styles.tabview}>
          <Card style={styles.GBPField}>
            <Card.Content>
              <Text style={styles.currencyFullName}>British Pounds</Text>
              <View style={styles.inline}>
                <Text style={styles.currencySymbol}>£</Text>
                <Text style={styles.currencyUnit}>GBP</Text>
              </View>
              <Text style={styles.currencyAmount}>500</Text>
            </Card.Content>
          </Card>
        </TabView.Item>
        <TabView.Item style={styles.tabview}>
          <Card style={styles.ARSField}>
            <Card.Content>
              <Text style={styles.currencyFullName}>Argentina Peso</Text>
              <View style={styles.inline}>
                <Text style={styles.currencySymbol}>$</Text>
                <Text style={styles.currencyUnit}>ARS</Text>
              </View>
              <Text style={styles.currencyAmount}>200</Text>
            </Card.Content>
          </Card>
        </TabView.Item>
        <TabView.Item style={styles.tabview}>
          <Card style={styles.EURField}>
            <Card.Content>
              <Text style={styles.currencyFullName}>Euro</Text>
              <View style={styles.inline}>
                <Text style={styles.currencySymbol}>€</Text>
                <Text style={styles.currencyUnit}>EUR</Text>
              </View>
              <Text style={styles.currencyAmount}>200</Text>
            </Card.Content>
          </Card>
        </TabView.Item>
      </TabView>
    </View>
  );
};

export default BalanceField;
