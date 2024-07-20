import React from 'react'

function Header() {
  return (
    <header className='flex items-center justify-between gap-4 p-4'>
        <h1 className='text-5xl font-medium'>
          Trans<span className='bold text-violet-400 text-5xl'>Scribe</span>
        </h1>
        <button className='flex items-center gap-2 px-4 py-2 rounded-md specialBtn text-violet-400'>
          <p>New</p>
          <i className="fa-solid fa-plus"></i>
        </button>
    </header>
  )
}

export default Header