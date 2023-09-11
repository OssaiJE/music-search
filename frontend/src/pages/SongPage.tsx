import React from 'react'
import Search from '../components/Search'
import Track from '../components/Track'
import Title from '../components/Title'

const SongPage = () => {
    return (
      <div>
        <div className="bg-black w-full p-4 text-white">
          <Title />
        </div>
        <Search />
        <Track />
      </div>
    );
}

export default SongPage
