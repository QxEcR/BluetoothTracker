import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
} from 'react-native';
import BluetoothDevice from './BluetoothDevice';
import PushNotification from "react-native-push-notification";



const BluetoothContainer = () => {

  const sendNotification = (Title, Message) => {
    PushNotification.localNotification({
      channelId: "BluetoothTrackerChannel",
      title: Title,
      message: Message
    })
  }

  return (
      <View>
        <BluetoothDevice BluetoothName={"device HI"} BluetoothState={"OFF"} />
        <Button title="Test Notification" 
        onPress={()=>{sendNotification("Hi","this is the body")}}
        ></Button>
      </View>
    );
};

const style = StyleSheet.create({

});


export default BluetoothContainer