import React, { useEffect, useState, useRef } from "react";
import axios from 'axios'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Comment from './Components/Comment'
import Loading from './Components/Loading'
function Search() {

    const [results, setResults] = useState([])

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        getResults();
    }, []);


    const getResults = async () => {
        setLoading(true);
        var url = `https://hn.algolia.com/api/v1/search_by_date?tags=comment`

        try {
            const response = await axios.get(url)
            setResults(response.data.hits);

            setError(null)
        } catch (err) {
            setError(err);
            console.log(err)
        }
        setLoading(false);


    };

    


    return (
        <div>
          
            {loading ? (
                <div className="flex  justify-center "><Loading/></div>
            ) : ( 
                <div className="bg-purple-100">
                    {results.map((result) => (
                            <Comment props={result}>  
                            </Comment>
                    ))}
                </div>
            )
            }
            {error && <div className="text-red font-bold">{error.message}</div>}
        </div>
    )
}

export default Search