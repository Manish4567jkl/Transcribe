import React from 'react'

function Home() {
  return (
    <main className='p-4 flex flex-1 flex-col justify-center gap-3 sm:gap-4 md:gap-5 text-center pb-20'>
        <h1 className='text-5xl font-semibold sm:text-6xl md:text-7xl '>
          Trans<span className='text-violet-400 text-5xl sm:text-6xl md:text-7xl bold'>Scribe</span>
        </h1>
        <h3 className='font-medium md:text-lg'>Record <span className='text-violet-400'>&rarr;</span> Transcribe <span className='text-violet-400'>&rarr;</span> Translate</h3>
        <button className='flex items-center text-base justify-between gap-4 mx-auto w-72 max-w-full my-4 specialBtn px-4 py-2 rounded-2xl'>
          <p>Record</p>
          <i className="fa-solid fa-microphone"></i>
        </button>
        <p>
          <p className='text-base'>Or <label className='text-violet-400 cursor-pointer hover:text-violet-600 duration-200'>Upload <input type="file"  className='hidden' accept='.mp3,.wave' /></label>
          a mp3 file
          </p>
        </p>
    </main>
  )
}

export default Home