import React, { useEffect, useState, useRef } from "react";
import axios from 'axios'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Comment from "./Components/Comment";
import Story from "./Components/Story";
import Loading from "./Components/Loading";
import ReactPaginate from "react-paginate";

function Search() {

  const [results, setResults] = useState([])

  const [query, setQuery] = useState("");
  const [typef, setTypef] = useState('story')
  const [byf, setByf] = useState('date')
  const [timef, setTimef] = useState('All time')

  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0)

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  const searchInputRef = useRef();

  useEffect(() => {
    getResults();
  }, [typef, byf, timef, currentPage]);

  const handlePageChange = event => {
    setCurrentPage(event.selected)
  }

  const getResults = async () => {
    setLoading(true);
    var url = `https://hn.algolia.com/api/v1/search_by_date?tags=${typef}`

    if (timef === 'All Time') {
      url = `https://hn.algolia.com/api/v1/search_by_date?query=${query}&tags=${typef}`
    } else {
      var t = 0
      var curr = Math.floor(Date.now() / 1000)
      if (timef === 'Last 24h') t = curr - 86400
      else if (timef === 'Past week') t = curr - 604800
      else if (timef === 'Past Month') t = curr - 2678400

      url = `https://hn.algolia.com/api/v1/search_by_date?query=${query}&tags=${typef}&numericFilters=created_at_i>${t},created_at_i<${curr}`
    }


      try {

        const response = await axios.get(url,
          {
            params: { page: currentPage, hitsPerPage: 10 }
          })
        if (byf === 'Popularity') {
          var nR = response.data.hits
          nR = nR.sort((a, b) => { return b.points - a.points })
          setResults(nR)
        }
        else {
          setResults(response.data.hits);
        }
        setTotalPages(response.data.nbPages)

        setError(null)
      } catch (err) {
        setError(err);
        console.log(err)
      }
    setLoading(false);


  };

  const search = (event) => {
    event.preventDefault();
    getResults();
  };
  const clear = () => {
    setQuery("");
    searchInputRef.current.focus()
  };


  function handletype(e) {
    setTypef(e)
    console.log(e)
  };
  function handleby(e) {
    setByf(e)
    console.log(e)

  };
  function handletime(e) {
    setTimef(e);
    console.log(e)

  };


  return (
    <div>
      <form className="flex justify-around mx-3 m-4 " onSubmit={search}>

        <label className="group relative flex w-full  ">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.9" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </span>
          <input className="px-5 placeholder:italic 
          placeholder:text-slate-400 block mt-2 mb-2
          bg-white w-full border border-slate-300 
          rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none
           focus:border-sky-500 focus:ring-sky-500 focus:ring-1 
           sm:text-sm" placeholder="Search for anything..."
            type="text"
            ref={searchInputRef}
            onChange={(event) => setQuery(event.target.value)}
            value={query}
            name="search" />
        </label>


        <div className="flex sm:col-span-1 sm:mt-0 ">
          <DropdownButton
            className="px-4 py-2"
            title={`${typef}`}
            id="dropdown-menu-align-right"
            onSelect={handletype}
          >
            <Dropdown.Item eventKey="story">story</Dropdown.Item>
            <Dropdown.Item eventKey="comment">comment</Dropdown.Item>
          </DropdownButton>

          <DropdownButton
            className="py-2"
            title={`${byf}`}
            id="dropdown-menu-align-right"
            onSelect={handleby}
          >
            <Dropdown.Item eventKey="date">Date</Dropdown.Item>
            <Dropdown.Item eventKey="popularity">Popularity</Dropdown.Item>
          </DropdownButton>

          <DropdownButton
            className="px-4 py-2"
            title={`${timef}`}
            id="dropdown-menu-align-right"
            onSelect={handletime}
          >
            <Dropdown.Item eventKey="All Time">All Time</Dropdown.Item>
            <Dropdown.Item eventKey="Last 24h">Last 24h</Dropdown.Item>
            <Dropdown.Item eventKey="Past week">Past week</Dropdown.Item>
            <Dropdown.Item eventKey="Past Month">Past Month</Dropdown.Item>
          </DropdownButton>

          <button className='px-4 mt-2 mb-2 mr-4 rounded-md bg-blue-500  text-md font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2' type="Submit" >Search</button>
          <button className=' px-4 mt-2 mb-2 mr-8 rounded-md  bg-indigo-300 text-md font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            type="button" onClick={clear} variant="outline-secondary">Clear</button>

        </div>
      </form>


      {loading ? (
        <div className="flex  justify-center "><Loading /></div>
      ) : (typef === 'story' ? (
        <>
          {results.map((result, index) => (
            <Story key={index} story={result} />

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
        </>
      ) : (
        <div >
          {results.map((result) => (
            <Comment props={result}></Comment>
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
      ))}
      {error && <div className="text-red font-bold">{error.message}</div>}
    </div>
  )
}

export default Search
