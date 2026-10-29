import bmi from './../assets/bmi.png'

import React from 'react'

export default function cardmenu(imgShow, titleShow , stitleShow) {
  return (
    <>
      <div className='border-1 border-grey-200 p-10 rounded-2xl shadow-2xl flex flex-col items-center'>
        <img src={imgShow} alt="รูป" className='w-35'/>
        <p className='mt-4 font-kanit text-xl font-bold'>
          {titleShow}
        </p>

        <p className='mt-4 font-kanit text-lg text-gray-500 text-center'>
          {stitleShow}
        </p>
      </div>
    </>
  )
}
// 