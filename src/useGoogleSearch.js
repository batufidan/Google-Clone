import React, {useState, useEffect} from 'react';
import API_KEY from './keys';

const CONTEXT_KEY = "c023f2b01985c4a40"

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        fetch(
          `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        )
          .then((response) => response.json())
          .then((result) => {
            setData(result);
          });
      };
  
      fetchData()
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [term]);
  
    return { data };
  };
  
  export default useGoogleSearch;