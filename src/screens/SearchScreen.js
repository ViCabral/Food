import React, {useState} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
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
        <>
            <SearchBar 
                term = {term} 
                onTermChange = {setTerm}
                onTermSubmit = {() => searchApi(term)}/>

                {errorMessage ? <Text>{errorMessage}</Text> : null}

            <ScrollView>

            <ResultsList 
            results = {filterResultsPrice('$')} 
            title = "Cost Effective" 
            />

            <ResultsList results = {filterResultsPrice('$$')} 
            title ="Bit Pricier" 
            />

            <ResultsList 
            results = {filterResultsPrice('$$$')} 
            title = "Big Spender" 
            />

            </ScrollView>
        </>
    )
};

const styles = StyleSheet.create({

});

export default SearchScreen;