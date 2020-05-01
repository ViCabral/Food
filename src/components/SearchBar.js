import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

    return (
        <View style = {styles.background}>
            <Feather name = "search" style = {styles.iconStyle}/>
            <TextInput style = {styles.inputStyle}
                autoCapitalize = "none"
                autoCorrect = {false}
                placeholder = "Search"
                value = {term}
                onChangeText = {newTerm => onTermChange(newTerm)}
                onEndEditing = {() => onTermSubmit()}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#E8E8E8',
        height: 50,
        margin: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputStyle: {
        flex: 1,
        marginHorizontal: 5,
        fontSize: 16
    },
    iconStyle :{
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 5
    }
});

export default SearchBar;