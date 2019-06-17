/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React  from 'react';
import {Text, View, Button} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text>Hola mundo!</Text>
        <Button
        title="Go to Details"
        onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}
class DetailsScreen extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text>Details Screen</Text>
        <Button
        title="Go to Home"
        onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details: DetailsScreen
},
{
  initialRouteName: "Home"
})

export default createAppContainer(AppNavigator)
