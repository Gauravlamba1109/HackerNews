import React, { useEffect, useState } from "react";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Story from "./Components/Story";
import Loading from "./Components/Loading";
import ReactPaginate from "react-paginate"

function Home() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0)

  const handlePageChange = event => {
    setCurrentPage(event.selected)
  }
  const getResults = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=points>100",
        {
          params: { page: currentPage }
        }
      );
      console.log(response.data.hits);
      setResults(response.data.hits);
      setError(null)
      setTotalPages(response.data.nbPages)
    } catch (err) {
      setError(err);
      console.log(error)
    }
    setLoading(false);
  };

  useEffect(() => {
    getResults();
  }, [currentPage]);


  return (
    < >
      {loading ? (
        <div className="flex  justify-center "><Loading /></div>
      ) : (
        <div>
          {results.map((result, index) => (
            <Story key={index} story={result} />
          ))}
        </div>
      )}
      {error && <div className="text-red font-bold">{error.message}</div>}


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
    </>
  )

}

export default Home