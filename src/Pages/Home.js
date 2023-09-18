import React from 'react'
import Body from '../components/Body';
import Header from '../components/Header';

function Home() {
  return (
    <div>
        <div className='bg-slate-800'>

            <div className='grid grid-rows-2 min-w-full min-h-screen'>
                <Body bodystyle="bg-white rounded row-span-4 md:min-w-full p-5 place-content-center" movie/>
                <Header headStyle="w-full fixed top-0 p-5 top-0 text-2xl text-center font-bold text-slate-800 p-0 bg-white shadow-lg"/>
            </div>

        </div>
    </div>
  )
}

export default Home
