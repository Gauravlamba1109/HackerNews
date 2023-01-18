import React, { useEffect, useState, useRef } from "react";
import axios from 'axios'
import Comment from './Components/Comment'
import Loading from './Components/Loading'
import ReactPaginate from "react-paginate";

function Search() {

    const [results, setResults] = useState([])

    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0)

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        getResults();
    }, [currentPage]);

    const handlePageChange = event => {
        setCurrentPage(event.selected)
    }

    const getResults = async () => {
        setLoading(true);
        var url = `https://hn.algolia.com/api/v1/search_by_date?tags=comment`

        try {
            const response = await axios.get(url,
                {
                    params: { page: currentPage, hitsPerPage: 10 }
                })
            setResults(response.data.hits);
            setTotalPages(response.data.nbPages)

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
                <div className="flex  justify-center "><Loading /></div>
            ) : (
                <div>
                    {results.map((result) => (
                        <Comment props={result}>
                        </Comment>
                    ))}
                    <ReactPaginate
                        nextLabel="Next"
                        previousLabel="Previous"
                        forcePage={currentPage}
                        pageCount={totalPages}
                        renderOnZeroPageCount={null}
                        onPageChange={handlePageChange}
                        className="Pagination  flex rounded-lg lg:px-64 md:px-32 sm:px-16 font-[Poppins] justify-evenly "
                        activeClassName="active-page"
                        previousClassName="previous-page"
                    />
                </div>
            )
            }
            {error && <div className="text-red font-bold">{error.message}</div>}
        </div>
    )
}

export default Search
