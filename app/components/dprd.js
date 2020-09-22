import React from 'react';
import { StyleSheet, Text, View, Image, Button, navigate } from 'react-native';
import ImageSlider from 'react-native-image-slider';

export default class Dprd extends React.Component {
  static navigationOptions = {
    title: "Presiden",
    headerStyle:{
      backgroundColor: '#FF8C00'
    },
    headerTintColor: '#fff'
  };
  render() {
    return (

      <View style={styles.container}>
        <ImageSlider images={[
        'http://placeimg.com/640/480/any',
        'http://placeimg.com/640/480/any',
        'http://placeimg.com/640/480/any'
      ]}
      style={{ margin: 20,}}
      />

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