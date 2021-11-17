import React from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import {Card} from 'react-native-shadow-cards';

const BluetoothDevice = ({BluetoothName, BluetoothState}) => {

  return (
      <View>
        <Card style={style.card}>
        <Text style={style.Text}>Device Name: {BluetoothName}</Text>
        <Text style={style.Text}>Device State: {BluetoothState}</Text>
      </Card>
      </View>
    );
};

const style = StyleSheet.create({
  Text: {
    fontSize: 16,
    color: "blue",
  },
  card: {
      padding: 5,
      height: 60,
      justifyContent: "center"
  }

});

export default BluetoothDevice