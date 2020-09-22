import React, { Component } from 'react';
import { Text, View, StyleSheet ,TouchableOpacity,ScrollView,ActivityIndicator, Image,} from 'react-native';
import { Card, Left, ListItem, Right,Body, List, Thumbnail, Spinner, } from 'native-base';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';


export default class Login extends Component {
  static navigationOptions = {
    title: "Pemilu",
    headerStyle:{
      backgroundColor: '#FF8C00'
    },
    headerTintColor: '#fff'
  }

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
// Later on in your component
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({loading: false})
  }
  render() {
    if( 
      this.state.loading
    ) return(
      <ActivityIndicator 
      size="large" 
      color="#0000ff" 
      style={[styles.container, styles.horizontal]}
      />
    )
    

    return (

      <View>
      <Image
      style={{width: 380, height: 200, alignSelf: 'center'}}
      source={ require ('../asset/images/logo.jpg')}
      />

      <View style={{margin: 10,}}>
      <ScrollView>
        <Card>
      <List>
            <ListItem 
            thumbnail
            >
              <Left>
                <Thumbnail square source={ require ('../asset/images/presiden.png')} />
              </Left>
              <Body>
                <Text>Presiden</Text>
              </Body>
              <Right>
              <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}
              >
                  <Text>View</Text>
              </TouchableOpacity>
              </Right>
            </ListItem>
          </List>
          </Card>
     
        <Card>
      <List>
            <ListItem 
            thumbnail
            onPress={() => this.props.navigation.navigate('Dpr')}
            >
              <Left>
                <Thumbnail square source={ require ('../asset/images/dpr.png')} />
              </Left>
              <Body>
                <Text>DPR</Text>
              </Body>
              <Right>
              <TouchableOpacity
              >
                  <Text>View</Text>
              </TouchableOpacity>
              </Right>
            </ListItem>
          </List>
          </Card>
      
        <Card>
      <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={ require ('../asset/images/dprd.jpg')} />
              </Left>
              <Body>
                <Text>DPRD</Text>
              </Body>
              <Right>
              <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Dprd')}
              >
                  <Text>View</Text>
              </TouchableOpacity>
              </Right>
            </ListItem>
          </List>
          </Card>
      
        <Card>
      <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={ require ('../asset/images/dpr.png')} />
              </Left>
              <Body>
                <Text>DPR RI</Text>
              </Body>
              <Right>
              <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Dpr')}
              >
                  <Text>View</Text>
              </TouchableOpacity>
              </Right>
            </ListItem>
          </List>
          </Card>
      
      </ScrollView>
      </View>

      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})