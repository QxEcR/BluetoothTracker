import React from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';


const Header = ({header}) => {

  return (
    <View style={{flexDirection: 'row', marginTop:30}}>
        <View style={{backgroundColor: 'black', height: 2, flex: 1, alignSelf: 'center'}} />
            <Text style={{ alignSelf:'center', paddingHorizontal:5, fontSize: 24, color: "black" }}>{header}</Text>
        <View style={{backgroundColor: 'black', height: 2, flex: 1, alignSelf: 'center'}} />
    </View>
    );
};

const style = StyleSheet.create({
  
});


export default Header
