
import React from 'react';

import xml2js from 'react-native-xml2js';

import List from './components/List';

import
{
    AsyncStorage,
    View,
    ActivityIndicator,
    RefreshControl,
    ScrollView,
    Button
} from 'react-native';

var getRSSFeed = function ()
{
    return fetch('http://feeds.news24.com/articles/Fin24/Tech/rss').then(response => response.text().then(data => data)).then(function (resultXml)
    {
        xml2js.parseString(resultXml, function (err, resultJSON)
        {
            AsyncStorage.setItem("_lastRSSFeed", JSON.stringify(resultJSON));
        });
    }).catch((error) =>
    {
        //alert("error = " + error.message);
    });
}




export default class HomeScreen extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            isLoading: true,
            refreshing: false,
            data: []
        };

        var scope = this;
        getRSSFeed().then(function ()
        {
            scope.setState({
                isLoading: false
            });
            scope._loadFeed();
        }).catch(function (error)
        {
            alert("errr" + error.message);
            })
        
    }

    

    static navigationOptions = {
        title: 'Latest News24 Feed'
    };

    render()
    {

        AsyncStorage.clear()

        if (this.state.isLoading)
        {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator style={{
                        flex: 1,
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        position: 'absolute',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }} />
                </View>
            )
        }

        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />
                }
            >
                <List
                    data={this.state.data}
                    onItemTap={this._onItemTap}
                />
            </ScrollView>
        );
    }
    _data = [];

    _onItemTap = (record) =>
    {
        this.props.navigation.navigate('WebView', {
            uri: record.link.toString()
        });

    }

    _btnResetApp = () =>
    {
        alert(11);
        AsyncStorage.clear();
        this.props.navigation.navigate('Home')
    }

    _onRefresh = () =>
    {
        this.setState({ refreshing: true });
        getRSSFeed().then(() =>
        {
            this.setState({ refreshing: false });
            this._loadFeed();
        });
    };
    _signOutAsync = async () =>
    {
        await AsyncStorage.removeItem("userToken");
        this.props.navigation.navigate('Auth');
    };
    _loadFeed = () =>
    {
        var scope = this;
        AsyncStorage.getItem("_lastRSSFeed").then(function (_lastRSSFeed)
        {
            var _lastRSSFeed = JSON.parse(_lastRSSFeed);
            var data = _lastRSSFeed.rss.channel[0].item;
            for (var i = 0; i < data.length; i++)
            {
                data[i].id = i.toString();
            }
            scope.setState({ data: data });
        });
    }
}
