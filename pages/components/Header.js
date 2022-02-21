import { ViewGridIcon } from '@heroicons/react/solid'
import Avatar from './Avatar'

function Header() {
  return (
    <header className="flex w-full items-center  justify-between p-5 text-sm text-slate-700">
      <div className="flex space-x-4">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>

      <div className="flex items-center space-x-4">
        <p className="link">Gmail</p>
        <p className="link">Images</p>

        {/* Icon */}
        <ViewGridIcon className="h-10 w-10 p-2" />

        {/* Avatar */}
        <Avatar url="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" />
      </div>
    </header>
  )
}

export default Header
