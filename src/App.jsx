import React from 'react'

const App = () => {
  return (
    <div className='h-screen  bg-black text-white'>
      <form className='flex justify-between items-start   p-10 '>
       <div className=' flex w-1/2 items-start flex-col gap-4'>
         <input 
        type="text" 
        placeholder='Enter Notes Heading'
        className='px-5 w-full outline-none py-2 border-2 rounded'/>

        <textarea
        type="text"
        className='px-5 w-full h-32 outline-none py-2 border-2 rounded' 
        placeholder='Write Details'/>

        <button className='bg-white outline-none text-black px-5 py-2 w-full rounded'>Add Note</button>
        
       </div>
       
      </form>
    </div>
  )
}

export default App
