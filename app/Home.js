
import React, { Component } from 'react';
import
{
    StyleSheet,
    AsyncStorage,
    Text,
    View,
    Button
} from 'react-native';

export default class HomeScreen extends React.Component
{
    static navigationOptions = {
        title: 'Welcome to the app!',
    };

    render()
    {
        return (
            <View style={styles.container}>
                <Button title="RSS FEED"  />
                <Button title="sign me out" onPress={this._signOutAsync} />
            </View>
        );
    }
    _signOutAsync = async () =>
    {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});