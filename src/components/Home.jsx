import React,{useState,useRef,useEffect} from 'react'

function Home({setFile,setAudioStream}) {

  const [recordingStatus,setRecordingStatus] = useState('inactive')
  const [audioChunks,setAudioChunks] = useState([])
  const [duration,setDuration] = useState(0)

  const mediaRecoder = useRef(null);

  const mimeType = 'audio/webm';

  async function startRecording (){
    let tempStream;

    console.log('started Recording')

    try {
      const streamData = navigator.mediaDevices.getUserMedia({
          audio:true,
          video:false
      })
      tempStream = streamData;
    } catch (error) {
      console.log(error.message);
      return
    }

    setRecordingStatus('recording')

    const media = new MediaRecorder(tempStream , {
      type:mimeType
    })
    mediaRecoder.current = media;
    mediaRecoder.current.start();

    let localAudioChunks = []
    mediaRecoder.current.ondataavailable = (event) => {
      if(typeof event.data === 'undefined') {return}
      if(event.data.size === 0) {return}
      localAudioChunks.push(event.data)
    }
    setAudioChunks(localAudioChunks)
  }

  async function stopRecording() {
    setRecordingStatus('inactive')
    console.log('stopped recording')

    mediaRecoder.current.stop()
    mediaRecoder.current.onstop = () => {
      const audioBlob = new Blob(audioChunks,{
        type : mimeType
      })
      setAudioStream(audioBlob)
      setAudioChunks([])
    }
  }
  
  useEffect(() => {
    if (recordingStatus === 'inactive') {return}

    const interval = setInterval(() => {
      setDuration(curr => curr + 1)
    },1000)
    return () => clearInterval(interval)
  },[])

  return (
    <main className='p-4 flex flex-1 flex-col justify-center gap-3 sm:gap-4 md:gap-5 text-center pb-20'>
        <h1 className='text-5xl font-semibold sm:text-6xl md:text-7xl '>
          Trans<span className='text-violet-400 text-5xl sm:text-6xl md:text-7xl bold'>Scribe</span>
        </h1>
        <h3 className='font-medium md:text-lg'>Record <span className='text-violet-400'>&rarr;</span> Transcribe <span className='text-violet-400'>&rarr;</span> Translate</h3>
        <button className='flex items-center text-base justify-between gap-4 mx-auto w-72 max-w-full my-4 specialBtn px-4 py-2 rounded-2xl'>
          <p className='text-violet-400'>Record</p>
          <i className="fa-solid fa-microphone"></i>
        </button>
        
          <p className='text-base'>Or <label className='text-violet-400 cursor-pointer hover:text-violet-600 duration-200'>Upload <input onChange={
            (e) => {
              const tempFile = e.target.files[0]
             setFile(tempFile)
            }
          } type="file"  className='hidden' accept='.mp3,.wave' /></label>
          a mp3 file
          </p>
       
    </main>
  )
} 

export default Home