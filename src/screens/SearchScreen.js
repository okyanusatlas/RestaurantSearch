import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from "../components/SearchBar";
import useResults from '../hooks/useResults';
import ResultsList from "../components/RestaurantList";
import LocationInput from "../components/LocationInput";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const renderErrorMessage = () => {
        return errorMessage ? <Text> ERROR: {errorMessage}</Text> : <Text> </Text>;
    };

    const filterResultsByPrice = price => {
        //price array of $ and €
        return results.filter(result => price.includes(result.price));
    };

    return <View style={{flex: 1}}>
        <SearchBar
          term={term}
          onTermChange={(newTerm) => setTerm(newTerm)}
          onTermSubmit={() => searchApi(term, location)}
        />
        <LocationInput
          location={location}
          onLocationChange={(newLocation) => setLocation(newLocation)}
          onLocationSubmit={() => searchApi(term, location)}
        />
        <Text>{renderErrorMessage()}</Text>
        <ScrollView>
            <ResultsList style={styles.title} results={filterResultsByPrice(['€', '$'])} title="Cost Effective"
            />
            <ResultsList style={styles.title} results={filterResultsByPrice(['€€', '$$'])} title="Bit Pricier"
            />
            <ResultsList style={styles.title} results={filterResultsByPrice(['€€€', '$$$'])} title="Big spender"
            />
        </ScrollView>

    </View>
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15
    }
});

export default SearchScreen;