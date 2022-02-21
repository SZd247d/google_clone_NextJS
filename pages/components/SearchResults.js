import React from 'react'
import PaginationButton from './PaginationButton'

function SearchResults({ results }) {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="mb-5 mt-3 text-base text-gray-600 ">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds )
      </p>

      {results?.items.map((result) => (
        <div key={result.link} className="mb-8 max-w-xl">
          <div className="group">
            <a href={result.link} className="text-blue-500 hover:text-blue-700">
              {result.formattedUrl}{' '}
            </a>
            <a href={result.link}>
              <h2 className="group-hover:underlinei truncate text-xl  font-medium text-blue-800">
                {result.title}{' '}
              </h2>
            </a>
          </div>
          <p className="line-clamp-2">{result.snippet}</p>
        </div>
      ))}

      <PaginationButton />
    </div>
  )
}

export default SearchResults
