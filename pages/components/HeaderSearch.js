import { SearchIcon } from '@heroicons/react/outline'
import { MicrophoneIcon, XIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import Avatar from './Avatar'
import HeaderOptions from './headerOptions'

function HeaderSearch() {
  const search = (e) => {
    e.preventDefault()
    const term = searchInputRef.current.value
    if (!term) return
    router.push(`/search?term=${term}`)
  }
  const searchInputRef = useRef(null)

  const router = useRouter()
  return (
    <header className="sticky top-0 bg-slate-200">
      <div className="flex w-full grow items-center p-6">
        <Image
          onClick={() => router.push('/')}
          src="https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png"
          height={40}
          width={120}
          className="cursor-pointer"
        />

        <div className="flex items-center  justify-between">
          <form className="ml-10 flex max-w-3xl grow items-center rounded-full border border-gray-200 px-6 py-3 shadow-lg ">
            <input
              ref={searchInputRef}
              type="text"
              className="w-full grow bg-slate-200 focus:outline-none"
            />
            <XIcon
              className="h-7 transform cursor-pointer transition  duration-100 hover:scale-125 sm:mr-3"
              onClick={() => (searchInputRef.current.value = '')}
            />
            <MicrophoneIcon className="mr-3 hidden h-6 border-l-2 border-gray-300 pl-4 text-blue-500 sm:inline-flex" />
            <SearchIcon className="h-6 text-blue-500 sm:inline-flex" />
            <button hidden type="submit" onClick={search}>
              Search
            </button>
          </form>

          <Avatar
            className="ml-auto"
            url="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          />
        </div>
      </div>

      <HeaderOptions />
    </header>
  )
}

export default HeaderSearch
