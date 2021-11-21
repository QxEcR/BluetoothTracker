import React, {useState} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Switch,
} from 'react-native';
import {Card} from 'react-native-shadow-cards';

const ScannedDevice = ({BluetoothName}) => {
  
  return (
      <View style={style.View}>
        <Card style={style.card}>
          <Text style={style.Text}>{BluetoothName}</Text>
        </Card>
      </View>
    );
};

const style = StyleSheet.create({
  View : {
    marginTop : 5,
    marginBottom: 5,
    width : 320
  },
  Text: {
    fontSize: 16,
    color: "black",
  },
  card: {
      padding: 15,
      height: 60,
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 15,
  }

});

export default ScannedDevice