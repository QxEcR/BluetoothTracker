/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from "react-native-push-notification";

// Must be outside of any component LifeCycle (such as `componentDidMount`).
PushNotification.configure({
    onNotification: function (notification) {
      console.log("NOTIFICATION:", notification);
    },
    requestPermissions: Platform.OS === 'ios',
  
    // permissions: {
    //   alert: true,
    //   badge: true,
    //   sound: true,
    // },
    // popInitialNotification: true,
    // requestPermissions: true,
  });


AppRegistry.registerComponent(appName, () => App);
