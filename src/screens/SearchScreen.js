import React, {useState} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({ navigation }) => {

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
            navigation = {navigation}/>

            <ResultsList results = {filterResultsPrice('$$')} 
            title ="Bit Pricier" 
            navigation = {navigation}/>

            <ResultsList 
            results = {filterResultsPrice('$$$')} 
            title = "Big Spender" 
            navigation = {navigation}/>
            
            </ScrollView>
        </>
    )
};

const styles = StyleSheet.create({

});

export default SearchScreen;