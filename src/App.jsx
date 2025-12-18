import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Claim_card from './components/Claim-card/Claim_card.jsx'
import Players from './components/Players/Players.jsx'
import Footer from './components/Footer/Footer.jsx'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [visited, setVisited] = useState(true);
  const [selected, setSelected] = useState([]);
  function claim() {
    let point=1500000000;
    let claimedCoin = document.getElementById("claimed_coin");
    claimedCoin.innerText = parseInt(claimedCoin.innerText) + point;
  }
  const handleVisited = () => {
    if (visited) {
      setVisited(false);
    } else {
      setVisited(true);
      }
  }
  
    const handleSelectPlayer = (player) => {
        let claimedCoin = document.getElementById("claimed_coin");
        if(selected.length === 6){
            toast.warn("You can select only 6 players");
            return;
        }
        if(claimedCoin.innerText < player.price){
            toast.warn("You don't have enough coins to select this player");
            return;
        }
        if(selected.find(p => (p.id === player.id))){ 
          setSelected([...selected])
        }
        else {
          setSelected([...selected, player]);
          claimedCoin.innerText = parseInt(claimedCoin.innerText) - player.price;
        }
    }
    
    const handleRemovePlayer = (player) => {
      setSelected(selected.filter(p => p.id !== player.id));
    }

    const addMorePlayer= () => {
      setVisited(true);
    }
  return (
    <div>
      <Navbar />
      <Claim_card claim={claim} visited={visited} />
      <Players handleVisited={handleVisited} visited={visited} handleSelectPlayer={handleSelectPlayer} handleRemovePlayer={handleRemovePlayer} selected={selected}  addMorePlayer={addMorePlayer}/>
      <Footer></Footer>
      <ToastContainer autoClose={2000}/>
    </div>
  );
}

export default App;
