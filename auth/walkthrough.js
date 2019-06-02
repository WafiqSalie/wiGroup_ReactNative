
import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import
{
    StyleSheet,
    AsyncStorage,
    Text,
    View,
    Button
} from 'react-native';

export default class walkthrough extends Component
{
    render()
    {
        return (
            <Swiper style={styles.wrapper} showsButtons={false} loop={false}>
                <View style={styles.slide1}>
                    <Text style={styles.text}>Welcome to wiGroup</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Getting Started</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>Final Instructions</Text>
                    <Button title="Sign In" onPress={this._signInAsync} />
                </View>
            </Swiper>
        );
    }
    _signInAsync = async () =>
    {
        await AsyncStorage.setItem('startingUpForFirstTime', '1');
        this.props.navigation.navigate('SignIn');
    };
}

const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})