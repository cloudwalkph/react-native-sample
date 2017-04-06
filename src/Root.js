import React, { Component } from 'react';
import {
   View,
   Text,
   StyleSheet
} from 'react-native';

import { StackNavigator } from 'react-navigation';

// Screens
import Home from './screens/Home';
import CreateTODO from './screens/CreateTODO';

const Navigation = StackNavigator({
    Home: { screen: Home },
    CreateTODO: { screen: CreateTODO }
});

class Root extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Navigation/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Root;
