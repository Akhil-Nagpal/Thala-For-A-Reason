import { useState } from 'react'
import video1 from "./assets/video.mp4"
import video2 from "./assets/Thala.mp4"
import video3 from "./assets/chalHaat.mp4"




function App() {

  const [phrase, setPhrase] = useState("")
  const [video, setVideo] = useState();
  const [title, setTitle] = useState("");


  const handleSubmit = () => {

    if (phrase === "coding nahi pasand") {
      setVideo(video1)
      setTitle("EZsnippet is thala for a reason!")
    }
    else if (phrase.length === 7) {
      setVideo(video2)
      setTitle("Thala for a reason!")
    }
    else {
      setVideo(video3)
      setTitle("Chal Haat!")
    }
  }


  const reset = () => {
    setVideo(null)
    setPhrase("")
  }

  return (
    <>
      <div className=' bg-zinc-900 text-white flex justify-center items-center min-h-screen flex-col'>

        <h1 className='text-4xl relative mb-10'>Thala For A Reason!</h1>

        <input
          value={phrase}
          onChange={(e) => setPhrase(e.target.value)}
          className=' px-5 py-2 rounded-lg text-black'
          placeholder='Enter here'
          type="text" />




        {video && (
          <div className='mt-5'>
            <h2 className='text-2xl'>{title}</h2>
            <video className='ml-16'
              width="200" height="100" autoPlay controls loop>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        )}



        <div className="btn flex gap-4">

          <button
            onClick={handleSubmit}
            className=' px-5 py-2 mt-4 bg-green-600 rounded-full hover:bg-green-700 
            hover:transition-all hover:duration-300 active:bg-green-800 active:transition-none'>
            Check
          </button>
          <button
            onClick={reset}
            className='px-5 py-2 mt-4 bg-red-600 rounded-full hover:bg-red-700 
            hover:transition-all hover:duration-300 active:bg-red-800 active:transition-none'>
            Reset
          </button>

        </div>

        <h3 className='text-white mt-10 text-xl '>Write: "coding nahi pasand" and see magic!</h3>
        <h3 className='textwhite mt-6 text-lg'>Note: Reset before entering second input!</h3>

      </div>
    </>
  )
}

export default App
