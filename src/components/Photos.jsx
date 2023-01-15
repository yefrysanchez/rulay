import React from 'react'

const Photos = () => {
  return (
    <div className='grid max-w-lg max-h-sm md:grid-cols-2 md:grid-rows-2  grid-cols-1 gap-2'>
        <div className='w-full h-48 rounded-lg overflow-hidden bg-slate-400 md:col-span-2'><img className='w-full h-full object-cover' src="https://excelautomationinc.com/wp-content/uploads/2021/01/placeholder.png" alt="" /></div>
        <div className='w-full h-48 rounded-lg overflow-hidden bg-slate-400 '><img className='w-full h-full object-cover' src="https://excelautomationinc.com/wp-content/uploads/2021/01/placeholder.png" alt="" /></div>
        <div className='w-full h-48 rounded-lg overflow-hidden bg-slate-400 '><img className='w-full h-full object-cover' src="https://excelautomationinc.com/wp-content/uploads/2021/01/placeholder.png" alt="" /></div>
    </div>
  )
}

export default Photos