import React, {useEffect} from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

import BluetoothContainer from './components/BluetoothContainer';
import PushNotification from "react-native-push-notification";



export default App = () => {
  // use effect to run functions on the start of the program
  useEffect(() => {
    creatChannel()
  }, [])
  
  const creatChannel = () => (
    PushNotification.createChannel({
      channelId: "BluetoothTrackerChannel",
      channelName: "BluetoothTrackerNotificationSystem",
      vibrate: true,
    })
  )

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