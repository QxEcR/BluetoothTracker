import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

import BluetoothContainer from './components/BluetoothContainer';


export default App = () => {
  

  return (
    <View style={style.View}>
      <BluetoothContainer />
    </View>
    );
};

const style = StyleSheet.create({
  View: {
    flex: 1,
    marginTop: 20,
    alignItems: "center",
  },
});