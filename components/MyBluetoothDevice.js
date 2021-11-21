import React, {useState} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Switch,
} from 'react-native';
import {Card} from 'react-native-shadow-cards';

const MyBluetoothDevice = ({BluetoothName, BluetoothState}) => {
  
  return (
      <View style={style.View}>
        <Card style={style.card}>
          <Text style={style.Text}>{BluetoothName}</Text>
          <Switch                 //
            trackColor={"#767577"}
            thumbColor={BluetoothState ? "#81b0ff" : "red"}
            value={BluetoothState}
            disabled={true}
          />
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
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 15,
  }

});

export default MyBluetoothDevice