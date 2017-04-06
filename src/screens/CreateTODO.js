import React, { Component } from 'react';
import {
    View,
    Text,
    ListView,
    StyleSheet
} from 'react-native';

class CreateTODO extends Component {
    componentDidMount() {
        console.log(this.props);
    }

    render() {
        const { navigation: { state } } = this.props;

        return (
            <View>
                <Text>Hello {state.params.name}</Text>
            </View>
        )
    }
}


export default CreateTODO;
