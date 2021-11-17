import React from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import BluetoothDevice from './BluetoothDevice';



const BluetoothContainer = () => {

  return (
      <View>
        <BluetoothDevice BluetoothName={"device HI"} BluetoothState={"OFF"} />
      </View>
    );
};

const style = StyleSheet.create({

});


export default BluetoothContainer