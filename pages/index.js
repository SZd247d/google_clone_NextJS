import { SearchIcon } from '@heroicons/react/outline'
import { MicrophoneIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'

function index() {
  const router = useRouter()
  const searchInputRef = useRef(null)
  console.log(searchInputRef)

  const search = (e) => {
    e.preventDefault()
    const term = searchInputRef.current.value

    if (!term) return

    router.push(`/search?term=${term}`)
  }

  return (
    <div className="">
      <Head>
        <title>Google Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen   flex-col  items-center justify-center bg-slate-200">
        {/* Header */}
        <Header />
        {/* Body */}
        <form className="mt-44 flex w-4/5 grow flex-col  items-center">
          <Image
            src="https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png"
            height={100}
            width={300}
          />
          <div className="mt-5 flex w-full max-w-md items-center rounded-full border-gray-200 bg-white px-5 py-3 focus-within:shadow-lg hover:shadow-lg sm:max-w-xl lg:max-w-2xl">
            <SearchIcon className="mr-3 h-5 text-gray-500" />
            <input
              ref={searchInputRef}
              type="text"
              className="grow focus:outline-none"
            />
            <MicrophoneIcon className="ml-3 h-5" />
          </div>

          <div className="mt-8 flex w-1/2 flex-col justify-center space-y-2 sm:flex-row  sm:space-x-4 sm:space-y-0 ">
            <button onClick={search} className="btn">
              Google Search
            </button>

            <button onClick={search} className="btn">
              I'm Feeling Lucky
            </button>
          </div>
        </form>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

export default index
