import React from 'react'

function FileDisplay({handleAudioReset,file,audioStream}) {
  return (
    <main className='p-4 flex flex-1 flex-col justify-center gap-3 sm:gap-4 md:gap-5 text-center pb-20 w-fit max-w-full mx-auto'>
        <h1 className='text-4xl font-semibold sm:text-5xl md:text-6xl '>
          Your<span className='text-violet-400  bold'>File</span>
        </h1>
        <div className='flex flex-col mx-auto text-left my-4'>
          <h3 className='font-semibold'>
            Name : 
          </h3>
          <p>
            {file.name}
          </p>
        </div>
        <div className='flex items-center justify-between gap-4'>
          <button className='text-slate-400 hover:text-violet-400'
          onClick={handleAudioReset}
          >
            Reset 
          </button>
          <button className='specialBtn px-4 py-2 rounded-lg text-violet-400'>
            <p>
              Transcribe
            </p>
          </button>
        </div>
    </main>
  )
}

export default FileDisplay