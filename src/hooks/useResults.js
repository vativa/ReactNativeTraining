import React, { useState, useEffect } from "react";
import { NativeText } from "react-native/Libraries/Text/TextNativeComponent";
import yelp from '../api/yelp';

const useResults = () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  
  const searchApi = async term => {
    try {
      const { data: { businesses } } = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: "Berlin"
        }
      });
      const restaurants = businesses.reduce((sorted, restaurant) => {
        switch (true) {
          case restaurant.price == '€€':
            sorted.a.push(restaurant);
            break;
          case restaurant.price == '€':
            sorted.b.push(restaurant);
            break;
          default:
            sorted.c.push(restaurant);
        }
        return sorted;
      }, { a: [], b: [], c: [] });
      setResults(restaurants);
      setErrorMessage('');
    } catch (err) {
      console.log('>>> ', err.message);
      setErrorMessage(err.message);
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);
  
  return [results, errorMessage, searchApi];
};

export default useResults;
