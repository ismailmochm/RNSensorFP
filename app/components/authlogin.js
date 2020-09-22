import React, { Component } from 'react';
import { Text, View, StyleSheet , AsyncStorage,} from 'react-native';
import { Form, Item, Input } from 'native-base';

export default class Authlogin extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount = async () => {
        const user = await AsyncStorage.getItem('user');
        this.props.navigation.navigate(user ? 'HomeNavigate' : 'LoginNavigate');
    };

  render() {
    return (
      <View>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
})