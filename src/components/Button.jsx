import React from 'react'

const Button = ({text}) => {
  return (
    <button className='bg-[#333333] w-sm p-3.5
     m-2 text-white font-bold text-lg mx-7 rounded-xl hover:bg-black hover:text-yellow-100 transition duration-300 ease-in-out cursor-pointer hover:scale-105'>{text}</button>
  )
}

export default Button