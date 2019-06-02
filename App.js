
import React from 'react';
import
{
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

class AppLoadingScreen extends React.Component
{
    constructor()
    {
        super();
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () =>
    {
        const userToken = await AsyncStorage.getItem('userToken');
        const startingUpForFirstTime = await AsyncStorage.getItem('startingUpForFirstTime');

        if (!startingUpForFirstTime)
            this.props.navigation.navigate('Walkthrough');
        else
            this.props.navigation.navigate(userToken ? 'Home' : 'SignIn');
    };
    
    render()
    {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

import AuthStack from './auth/stack'; 
import AppStack from './app/stack'; 

export default createAppContainer(createSwitchNavigator(
    {
        AppLoading: AppLoadingScreen,
        App: AppStack,
        Auth: AuthStack
    },
    {
        initialRouteName: 'AppLoading'
    }
));