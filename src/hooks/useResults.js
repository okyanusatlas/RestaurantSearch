import {useEffect, useState} from 'react';
import yelp from '../api/yelp';
import {Text} from "react-native";
import React from "react";


export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm, location = "Heidelberg") => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location
                }
            });
            console.log("location", location);
            console.log("results", results.forEach(r => console.log(r.name)));
            setResults(response.data.businesses);

        } catch (e) {
            console.log(e);
            setErrorMessage(e);
        }
    };

    useEffect(() => {
        searchApi('pizza')
    }, []);


    return [searchApi, results, errorMessage];
}

