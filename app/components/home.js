import React from 'react';
import {LocalAuthentication} from 'expo'

import { StyleSheet, Text, View, Image, Button, Spinner, Platform, Alert } from 'react-native';
import ImageSlider from 'react-native-image-slider';
// import console = require('console');

export default class Home extends React.Component {
  static navigationOptions = {
    title: "Presiden",
    headerStyle:{
      backgroundColor: '#FF8C00'
    },
    headerTintColor: '#fff'
  };
  handleLoginPress = () => {
    if (Platform.OS === 'android') {
      this.showAndroidAlert();
    } else {
      this.scanBiometrics();
    }
  };
  showAndroidAlert = () => {
      Alert.alert('Fingerprint Scan', 'Letakkan jari anda pada sensor.');
      this.scanBiometrics();
    };
  scanBiometrics = async () => {
      let result = await LocalAuthentication.authenticateAsync('Biometric Scan.');
      if (result.success) {
        Alert.alert(
          'Vote berhasil!',
          'Anda telah berhasil melakukan voting.'
        );
      } else {
        Alert.alert(
          'Vote gagal!',
          'Fingerprint anda tidak terdaftar.'
        );
      }
    };

  render() {
    const images = [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ZqW3BMpe6IKNH2tUVhiBSY_KSFdz6T9OO84yie5DpPQFG8Xa',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeLkPDXstnMP8VZDrMNgrFmAybz_nQKa6_WJ5oKHxKIb3NIxBG',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtVUz3uwUtf76I1jzapSiAStyX-sy61GUNUTGeG_4Js-Qy0bkE'
    ]
    return (
      <View style={styles.container}>
        <ImageSlider images={images}
      style={{ margin: 20,}}
      />
      <View style={{ margin:20 }}>
        <Button onPress={() => this.handleLoginPress()}
          title="Vote"
        />
      </View>
              
       <Button
       onPress={() => this.props.navigation.navigate('Login')}
        title="Back"
      />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});