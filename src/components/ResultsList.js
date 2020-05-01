import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({title, results}) => {
    
    return (
        <View>
         <Text style = {styles.title} >{title}</Text>
         <FlatList 
         showsHorizontalScrollIndicator = {false}
         horizontal
         data = {results}
         keyExtractor = {result => result.id}
         renderItem = {({ item }) => {
            return <ResultsDetail result = {item}/>
         }}
         />
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 15
    }
});

export default ResultsList;