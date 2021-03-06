import React from 'react';
import {View, Text, Image ,StyleSheet} from 'react-native';

const ResultsDetail = ({ result, navigation }) => {
    
    return (
        <View style = {styles.item}>   
            <Image style = {styles.image} source = {{ uri: result.image_url}}/>
            <Text style = {styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    item: {
        marginLeft: 15,
        marginBottom:10,
        marginTop: 10
    },
    image: {
        width: 200,
        height: 150,
        borderRadius: 10,
        marginBottom: 5    
    },
    name: {
        fontWeight: 'bold'
    }
});

export default ResultsDetail;