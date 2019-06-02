import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';


export default class ListItem extends Component
{
    _onPress = () =>
    {
        this.props.onPressItem(this.props.id);
    };

    render()
    {
        const textColor = "black";

        return (
            <TouchableOpacity onPress={this._onPress}>
                <View style={{ flex: 1, flexDirection: 'row', borderBottomColor: "#cccccc", borderBottomWidth: 1, padding: 4 }} >
                    <View style={{ justifyContent: 'center' }}>
                        <Image source={{ uri: this.props.data.enclosure[0]["$"].url }} style={{ width: 70, height: 70 }} />
                    </View>
                    <View style={{ flex: 1, padding: 10 }}>
                        <Text style={{ color: textColor, flex: 1, fontWeight: 'bold', paddingBottom: 4 }}>
                            {this.props.title}
                        </Text>
                        <Text style={{ color: textColor, flex: 1 }}>
                            {this.props.data.description}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}