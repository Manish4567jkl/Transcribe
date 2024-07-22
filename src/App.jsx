import React, { useState } from 'react';
import { Header,FileDisplay, Home, Transcribing, Transcription, Translation, Footer } from './components/index'; 

const App = () => {

  const [file,setFile] = useState(null);
  const [audioStream,setAudioStream] = useState(null)

  const isAudioAvailable = file || audioStream;

  function handleAudioReset () {
    setAudioStream(null)
    setFile(null)
  }
    return (
  <div className='flex flex-col   max-w-[1000px] mx-auto w-full '>
    <section className='min-h-screen flex flex-col'>
       <Header />
      {isAudioAvailable ? <FileDisplay 
      handleAudioReset={handleAudioReset}
      file={file} audioStream={audioStream}/> :  <Home setFile={setFile} setAudioStream={setAudioStream}/>}
    </section>
    <footer className=''>
    
    </footer>
  </div>
    );
};

export default App;