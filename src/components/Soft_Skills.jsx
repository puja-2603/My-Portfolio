import React from 'react'
import adaptability from '../assets/adaptation.png'
import thinking from '../assets/design-thinking.png'
import teamwork from '../assets/partnership.png'
import leadership from '../assets/leadership.png'
import time_management from '../assets/time management.png'
import communication from '../assets/conversation.png'

const Experience = () => {

        const tech=[
            {
                id:1,
                src:teamwork,
                title:'Teamwork',
                style:'shadow-red-500'
            },
            {
                id:2,
                src:leadership,
                title:'Leadership',
                style:'shadow-yellow-500'
            },
            {
                id:3,
                src:adaptability,
                title:'Adaptability',
                style:'shadow-pink-500'
            },
            {
                id:4,
                src:time_management,
                title:'Time Management',
                style:'shadow-blue-500'
            },
            {
                id:5,
                src:thinking,
                title:'Creative Thinking',
                style:'shadow-green-500'
            },
            {
                id:6,
                src:communication,
                title:'Communication',
                style:'shadow-yellow-300'
            }
        ]
    
  return (
    <div name='experience' className='bg-gradient-to-b from-cyan-800 via-slate-800 to-black w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>

            <p className='text-3xl'>Soft Skills</p>
            <p className='py-6'>These are the skills I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

{
    tech.map(({id,src,title,style})=>(
        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
        <img src={src} alt="" className='w-20 mx-auto'/>
        <p className='mt-4'>{title}</p>
    </div>
    ))
}

</div>
      </div>
    </div>


   
    
  )
}

export default Experience
