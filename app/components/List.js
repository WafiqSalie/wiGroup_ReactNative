import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';
import ListItem from './ListItem';

export default class List extends Component
{

    // state = { selected: (new Map(): Map<string, boolean>) };

    _keyExtractor = (item, index) => item.id;

    _onPressItem = (item) =>
    {
        // updater functions are preferred for transactional updates
        //this.setState((state) =>
        //{

        //   // alert(JSON.stringify(state));

        //    // copy the map rather than modifying state.
        //    //const selected = new Map(state.selected);
        //   // selected.set(item.id, !selected.get(item.id)); // toggle

        //    return { item };
        //});

        if (this.props.onItemTap)
        {
            this.props.onItemTap(item);
        }
    };

    _renderItem = ({ item }) => (
        <ListItem
            id={item.id}
            onPressItem={() => this._onPressItem(item)}
            data={item}
            //selected={!!this.state.selected.get(item.id)}
            title={item.title}
        />
    );

    render()
    {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.data}
                    extraData={this.state}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        flex: 1
    },
})
