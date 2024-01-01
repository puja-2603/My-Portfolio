import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.png'  
import installNode from '../assets/portfolio/installNode.png'  
import navbar from '../assets/portfolio/navbar.png'  

const Portfolio = () => {

    const portfolios=[
        {
            id:1,
            src:arrayDestruct,
            demo:  'https://puja-2603.github.io/Expense-Tracker/',
            code:  'https://github.com/puja-2603/Expense-Tracker'
           
        },
        {
            id:2,
            src:installNode,
            demo: 'https://backpacks.onrender.com/',
            code: 'https://github.com/Anicrate/Crop-Finder'
        },
        {
            id:3,
            src:navbar,
            demo: 'https://puja-2603.github.io/Imagiverse/',
             code: 'https://github.com/puja-2603/Imagiverse'
        }
    ]

  return (
    <div name="portfolio"
    className="bg-gradient-to-b from-cyan-950 via-slate-800 to-black w-full text-white md:h-screen sm:h-screen" >
     <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6'>Check out some of my work right here</p>
        </div>
         
       
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {
            portfolios.map(({id,src,demo,code})=>(
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center'>
                    <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" href={demo}>Demo</a>
                    <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" href={code}>Code</a>
                </div>
            </div> 
            ))
         }
           
        </div>
     </div>
    </div>
  )
}

export default Portfolio
