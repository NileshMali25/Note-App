import React from 'react'
import { useState } from 'react';


const App = () => {
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')

    const [task, setTask] = useState([])
    const submitHandler = (e) => {
    e.preventDefault()
    
    const CopyTask=[...task];
    CopyTask.push({title,details})
    setTask(CopyTask)
    

    setTitle('')
    setDetails('')
  }

  const deleteNode=(idx)=>{
    const copyTask=[...task];

    copyTask.splice(idx,1)
    setTask(copyTask)

  }


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
          className='px-5 w-full font-medium outline-none py-2 border-2 rounded'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }} />

        {/* DETAILED WALA INPUT */}
        <textarea
          type="text"
          className='px-5 w-full font-medium  h-32 outline-none py-2 border-2 rounded'
          placeholder='Write Details'
          value={details} 
          onChange={(e)=>{
            setDetails(e.target.value)
          }}/>

        <button className='bg-white active:bg-scale-95 font-medium  outline-none text-black px-5 py-2 w-full rounded'>Add Note</button>

      </form>

      <div className=' lg:w-1/2 lg:border-l-2  p-10 '>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 h-[90%] mt-5 overflow-auto'>
          {task.map(function(elem,idx){
            return <div key={idx} className='h-52 w-40 relative flex justify-between flex-col items-start rounded-xl bg-cover bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]  py-9 pb-4 px-4  text-black '>
              
            <div>
              <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
              <p className='mt-4 text-xm leading-tight fomt-semibold text-grey-600'>{elem.details}</p>
            </div>
            <button onClick={()=>{
              deleteNode(idx)
            }} className='w-full bg-red-600 text-white py-1 text-xs rounded-2xl font-bold cursor-pointer active:'>Delete</button>
            </div>
            
          })}
        </div>

      </div>
    </div>
  )
}

export default App
