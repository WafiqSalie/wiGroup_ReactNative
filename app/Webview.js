import React, { Component } from 'react';
import { WebView, ActivityIndicator, StatusBar, View, StyleSheet } from 'react-native';


export default class Webview extends Component
{
    constructor(props)
    {
        super(props);

        var uri = this.props.navigation.getParam("uri");

        this.state = {
            uri: uri,
            isLoading: true
        };
    }

    _webContentLoaded = () =>
    {
        this.setState({
            isLoading: false
        });
    }

    render()
    {

        return (
            <View style={styles.container}>

                <WebView
                    onLoadEnd={this._webContentLoaded}
                    source={{ uri: this.state.uri }}
                    style={{ marginTop: 20, flex: 1 }}
                />
                {this.state.isLoading && (
                    <ActivityIndicator
                        style={{
                            flex: 1,
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            position: 'absolute',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    />
                )}
            </View>

        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
