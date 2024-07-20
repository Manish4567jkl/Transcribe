import React from 'react';
import { Header, Home, Transcribing, Transcription, Translation, Footer } from './components/index'; 

const App = () => {
    return (
  <div className='flex flex-col   max-w-[1000px] mx-auto w-full '>
    <section className='min-h-screen flex flex-col'>
       <Header />
       <Home />
    </section>
    <footer className=''>

    </footer>
  </div>
    );
};

export default App;