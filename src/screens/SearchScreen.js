import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults ();

    //console.log(results);

    const filterResultsPrice = (price) => {
        // price === "$" || "$$" || "$$$"
        return results.filter( result => {
            return result.price === price;
        });
    };

    return (

        <View>
            <SearchBar 
                term = {term} 
                onTermChange = {setTerm}
                onTermSubmit = {() => searchApi(term)}/>

                {errorMessage ? <Text>{errorMessage}</Text> : null}

            <Text>We found {results.length} Results</Text>

            <ResultsList results = {filterResultsPrice('$')} title="Cost Effective"/>
            <ResultsList results = {filterResultsPrice('$$')} title="Bit Pricier"/>
            <ResultsList results = {filterResultsPrice('$$$')} title="Big Spender"/>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default SearchScreen;