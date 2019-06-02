

import React from 'react';
import
{
    StyleSheet,
    AsyncStorage,
    View,
    Button,
    TextInput,
    Text,
    Alert
} from 'react-native';

import CryptoJS from 'crypto-js';

const encryptKey = "wGrp2019cr";

export default class SignInScreen extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            Username: "",
            Password: ""
        };
    }
    static navigationOptions = {
        title: 'Please sign in'
    };
    render()
    {
        return (
            <View style={styles.container}>
                <Text style={{ color: "black", position: "absolute", top: "30%", fontSize: 30 }}>Sign In</Text>

                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <TextInput placeholder="Username" nativeID="Username" onChangeText={this._userNameTextChange} style={{ borderBottomWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 5, width: 220, fontSize: 20 }} />
                    <TextInput secureTextEntry={true} placeholder="Password" onChangeText={this._PasswordTextChange} style={{ borderBottomWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 5, width: 220, fontSize: 20, marginTop: 15 }} />
                    <Text style={{ backgroundColor: "#007aff", color: "#fff", width: 70, marginTop: 20, padding: 5, textAlign: "center", fontSize: 20, height: 40, lineHeight: 30 }} onPress={this._signInAsync} >Login</Text>
                </View>
            </View>
        );
    }

    _userNameTextChange = (username) =>
    {
        this.setState({
            Username: username
        });
    }
    _PasswordTextChange = (password) =>
    {
        this.setState({
            Password: password
        });
    }

    _signInAsync = async () =>
    {
        if (!this.state.Username || this.state.Password)
        {
            Alert.alert("Login","Please enter a username and password")
            return;
        }

        AsyncStorage.setItem('userToken', CryptoJS.AES.encrypt(this.state.Username + ':' + this.state.Password, encryptKey));
        this.props.navigation.navigate('App');
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});