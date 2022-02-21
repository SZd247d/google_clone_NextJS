import Head from 'next/head'
import HeaderSearch from './components/HeaderSearch'
import Response from '../Response'
import { useRouter } from 'next/router'
import SearchResults from './components/SearchResults'

function Search({ results }) {
  console.log(results)
  const router = useRouter()
  console.log(Response)
  return (
    <div className=" bg-slate-200">
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <HeaderSearch />

      {/* Search Results */}
      <SearchResults results={results} />
    </div>
  )
}

export default Search

export async function getServerSideProps(context) {
  const useDummyData = false
  const startIndex = context.query.start || 0

  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
  ).then((res) => res.json())

  return {
    props: {
      results: useDummyData ? Response : data,
    },
  }
}
