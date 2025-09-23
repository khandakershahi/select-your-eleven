import { Suspense, useState } from 'react';
import './App.css'

import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import Navbar from './components/Navbar/Navbar';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';

const fetchPlayers = async () => {
  const res = await fetch('/players.json')
  return res.json();
}


function App() {

  const [toggle, setToggle] = useState(true);

  const playerPromise = fetchPlayers();

  return (
    <>
      <Navbar></Navbar>

      <div className=' max-w-[1200px] mx-auto flex justify-between items-center'>
        <h1 className='font-bold text-2xl'>Available Player</h1>

        <div className='flex justify-between items-center font-bold'>
          <button onClick={() => { setToggle(true) }} className={`py-3 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle === true ? "bg-[#E7FE29]" : ""}`}>Available</button>
          <button onClick={() => { setToggle(false) }} className={`py-3 px-4 border-1 border-gray-400 rounded-r-2xl border-r-0 ${toggle === false ? "bg-[#E7FE29]" : ""}`}>Selected <span>(0)</span></button>
        </div>
      </div>

      {
        toggle === true ? <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <AvailablePlayers playerPromise={playerPromise}></AvailablePlayers>
        </Suspense> : <SelectedPlayers></SelectedPlayers>
      }






    </>
  )
}

export default App
