import React from 'react'
import { useState } from 'react';

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form Submitted');

  }

  const [title, setTitle] = useState('')
  return (
    <div className='h-screen lg:flex  bg-black text-white '>
      
      <form onSubmit={(e) => {
        submitHandler(e)

      }} className='flex lg:w-1/2 items-start flex-col gap-4 p-10 '>
        <h1 className='text-4xl font-bold'>Add Notes</h1>

        {/* PEHLA INPUT FOR HEADING */}
        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 w-full font-medium outline-none py-2 border-2 rounded' />

        {/* DETAILED WALA INPUT */}
        <textarea
          type="text"
          className='px-5 w-full font-medium  h-32 outline-none py-2 border-2 rounded'
          placeholder='Write Details' />

        <button className='bg-white font-medium  outline-none text-black px-5 py-2 w-full rounded'>Add Note</button>

      </form>

      <div className=' lg:w-1/2 lg:border-l-2  p-10 '>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap gap-5 h-full mt-5 overflow-auto'>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
        </div>

      </div>
    </div>
  )
}

export default App
