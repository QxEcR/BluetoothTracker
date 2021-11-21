import React, {useState} from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Button,
    Pressable,
    Dimensions
} from 'react-native';
import ScannedDevice from './ScannedDevice';
import MyBluetoothDevice from './MyBluetoothDevice';
import PushNotification from "react-native-push-notification";
import Header from './Header'

const BluetoothContainer = () => {

  const [myDevices, setMyDevices] = useState([])

  const [scannedDevices, setScannedDevices] = useState([])

  const scanBluetooth = () => {
    setScannedDevices(Device => {
      return [
          {name:"My Labtop", state:true},
          {name:"My Watch",  state:true},
          {name:"My Iphone", state:true},
        ]
    })
  }

  const addToMyDevices = (addeddevice) => {
    setMyDevices(device => {
      return [...device, addeddevice]
    })

    setScannedDevices(device => {
      return scannedDevices.filter(el => el.name !== addeddevice.name)
    })
  }

  const sendNotification = (Title, Message) => {
    PushNotification.localNotification({
      channelId: "BluetoothTrackerChannel",
      title: Title,
      message: Message
    })
  }  

  return (
      <View style={style.View}>

        <ScrollView>

          <Header header={"My Devices"}/>

          {
            myDevices.map((device) => {
              return (
                <MyBluetoothDevice key={device.name}
                  BluetoothName={device.name}
                  BluetoothState={device.state} 
                />
              )
            })
          }

          <Header header={"Scanned Devices"}/>

          <Button title={"Scan"} onPress={scanBluetooth}/>

          {
            scannedDevices.map((device) => {
              return (
                <Pressable key={device.name} onPress={()=> addToMyDevices(device)}>
                  <ScannedDevice BluetoothName={device.name} />
                </Pressable>
              )
            })
          }
        </ScrollView>
      </View>
    );
};

const style = StyleSheet.create({
  View:{
    marginTop: 30,
    marginBottom: 30,
    width: Dimensions.get('window').width - 40,
  },
});


export default BluetoothContainer