import React from 'react'
import Search from '../components/Search'
import Title from '../components/Title'

const Home = () => {
    return (
      <div className="flex flex-col items-center w-full">
        <div className="bg-black w-full p-4 text-white">
          <Title />
        </div>
          <Search />
        <img src='/music-icon.svg' alt='' height={120} width={120} className='mt-[300px]' />
      </div>
    );
}

export default Home
