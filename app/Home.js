
import React from 'react';
import
{
    StyleSheet,
    AsyncStorage,
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
                <Button title="RSS FEED" onPress={this._showMoreApp} />
                <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
            </View>
        );
    }

    _showMoreApp = () =>
    {
        this.props.navigation.navigate('Other');
    };

    _signOutAsync = async () =>
    {
        await AsyncStorage.removeItem("userToken");
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