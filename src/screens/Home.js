import React, { Component } from 'react';
import {
    View,
    Text,
    ListView,
    StyleSheet,
    TouchableHighlight,
    TextInput
} from 'react-native';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null
        }
    }

    static navigationOptions = {
        title: 'Home'
    }

    _onPress = () => {
        const {navigation} = this.props;

        if (! this.state.name) {
            alert('Hey enter your name first');

            return;
        }

        navigation.navigate('CreateTODO', { name: this.state.name })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Input your name</Text>

                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(name) => this.setState({name})}
                    value={this.state.name}
                />

                <TouchableHighlight style={styles.button} onPress={this._onPress}>
                    <Text style={styles.text}>Submit Name</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        marginTop: 20,
        height: 40,
        backgroundColor: 'blue'
    },
    text: {
        color: '#fff'
    }
});

export default Home;
