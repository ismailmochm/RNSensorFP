import React from 'react';
import Login from './app/components/login'
import Home from './app/components/home'
import Authlogin from './app/components/authlogin'
import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";

export default class App extends React.Component {
  render() {
    return (
      <RockNavigate />
    )
  }
}

const HomeNavigate = createStackNavigator({
  Home,
})

const LoginNavigate = createStackNavigator({
  Login:Login,
})

const RockNavigate = createAppContainer(createSwitchNavigator(
  {
    Authlogin: Authlogin,
    HomeNavigate: HomeNavigate,
    LoginNavigate: LoginNavigate,
  },
  {
    initialRouteName: 'Authlogin'
  }
  ))


