import React from 'react'
import Body from '../components/Body';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Home() {
  return (
    <div>
        <div className='bg-slate-800'>

            <div className='grid grid-cols-1 grid-rows-4 min-w-full min-h-screen'>
                <Header span="p-4 text-white text-3xl text-center"/>
                <Body bodystyle="bg-white rounded row-span-3"/>
                <Footer />
            </div>

        </div>
    </div>
  )
}

export default Home
