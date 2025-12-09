import React from 'react'
import avatar from './assets/avatar-jessica.jpeg'
import Button from './components/Button'

const Hero = () => {
  return (
    <div className='w-full bg-[#141414] h-screen flex flex-col justify-center items-center '>
      <div className='w-full sm:max-w-md h-[90vh] bg-[#1f1f1f] flex flex-col mt-14  rounded-lg '>
        <div className='p-11 flex flex-col items-center'>
<img src={avatar} alt="avatar" className='rounded-full w-24 h-24'/>

        <h1 className='text-white font-bold text-3xl m-3'>Jessica Randall</h1>

        <h2 className='text-[#AEC265] text-lg font-bold'>London, United Kingdom</h2>

        <p className='text-white text-lg mt-7'>"Frontend developer and Avid reader"</p>

        </div>
        <div>
          <Button text="Github"/>
          <Button text="Frontend Mentor"/>
          <Button text="Linkedin"/>
          <Button text="Twitter"/>
          <Button text="Instagram"/>
        </div>
        


      </div>
    </div>
  )
}

export default Hero
