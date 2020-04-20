import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/Yelp';

const SearchScreen = () => {
    
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    
    const searchApi = async () => {

        try {
            const response = await yelp.get('/search', {
                params: {
                limit: 50,
                term,
                location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
        setErrorMessage('Something went wrong');
        }
    };

    return (
        <View>
            <SearchBar 
                term = {term} 
                onTermChange = { newTerm => setTerm(newTerm)}
                onTermSubmit = {() => searchApi()}/>

                {errorMessage ? <Text>{errorMessage}</Text> : null}

            <Text>We found {results.length} Results</Text>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default SearchScreen;