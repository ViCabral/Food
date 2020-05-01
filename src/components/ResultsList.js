import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({title, results, navigation }) => {
    if(!results.length){
        return null;
    }

    return (
        <View>
         <Text style = {styles.title} >{title}</Text>

         <FlatList 
         showsHorizontalScrollIndicator = {false}
         horizontal
         data = {results}
         keyExtractor = {result => result.id}
         renderItem = {({ item }) => {
            return (
            <TouchableOpacity onPress = {() => navigation.navigate('ShowResults', { id: item.id })}>
            <ResultsDetail result = {item}/>
            </TouchableOpacity>
            )
         }}
         />
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15
    }
});

export default withNavigation(ResultsList);