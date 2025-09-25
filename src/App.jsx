import { Suspense, useState } from 'react';
import './App.css'
import { ToastContainer } from 'react-toastify';
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import Navbar from './components/Navbar/Navbar';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';

const fetchPlayers = async () => {
  const res = await fetch('/players.json')
  return res.json();
}

const playerPromise = fetchPlayers();

function App() {

  const [toggle, setToggle] = useState(true);

  const [availableBalance, SetavailableBalance] = useState(1000000);

  const [purchasedPlayers, setPurchasedPlayers] = useState([])
  // console.log(purchasedPlayers);

  const removePlayer = (p) => {
    const filterData = purchasedPlayers.filter(ply => ply.player_name !== p.player_name);
    console.log(p.price)
    setPurchasedPlayers(filterData);
    SetavailableBalance(availableBalance + p.price)
  }

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className=' max-w-[1200px] mx-auto flex justify-between items-center'>
        <h1 className='font-bold text-2xl'>{
          toggle === true ? "Available Player" : `Selected Player (${purchasedPlayers.length}/6)`
        }</h1>

        <div className='flex justify-between items-center font-bold'>
          <button onClick={() => { setToggle(true) }} className={`py-3 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle === true ? "bg-[#E7FE29]" : ""}`}>Available</button>
          <button onClick={() => { setToggle(false) }} className={`py-3 px-4 border-1 border-gray-400 rounded-r-2xl border-r-0 ${toggle === false ? "bg-[#E7FE29]" : ""}`}>Selected <span>({purchasedPlayers.length})</span></button>
        </div>
      </div>

      {
        toggle === true ? <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <AvailablePlayers purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} SetavailableBalance={SetavailableBalance} playerPromise={playerPromise}></AvailablePlayers>
        </Suspense> : <SelectedPlayers removePlayer={removePlayer} purchasedPlayers={purchasedPlayers}></SelectedPlayers>
      }



      <ToastContainer />


    </>
  )
}

export default App
