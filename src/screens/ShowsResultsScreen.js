import React, {useState, useEffect} from 'react';
import {View, Text, Image ,StyleSheet, FlatList} from 'react-native';
import yelp from '../api/Yelp';

const ShowResultsScreen = ({ navigation }) => {

    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    console.log(result);

    useEffect(() => {
        getResult(id);
    }, []);

    if(!result) {
        return null;
    }
    return (
        <View>
            <Text style = {styles.title}>{result.name}</Text>
            
            <FlatList
            showsHorizontalScrollIndicator = {false}
            horizontal
            data = {result.photos}
            keyExtractor = {photo => photo}
            renderItem = {({ item }) => {
                return <Image style = {styles.image} source = {{ uri: item }}/>
            }}
            />

            <View style = {styles.container}>

                <Text style = {styles.text}>{result.rating} Stars, {result.review_count} Reviews</Text>
                <Text style = {styles.text}>Price: {result.price}</Text>
                <Text style = {styles.text}>Phone: {result.display_phone}</Text>

            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column"
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 5
    },
    text: {
        fontSize: 20,
        margin: 5
    },
    image: {
        width: 350,
        height: 250,
        margin: 5,
        borderRadius: 10
    }
});

export default ShowResultsScreen;