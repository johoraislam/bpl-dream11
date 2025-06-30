// App.jsx
import { useEffect, useState } from "react";
import { ToastContainer,} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import AllPlayers from "./components/AllPlayers/AllPlayers";

function App() {
  
useEffect(() => {
  fetch("./fake.json")
  .then((res) => res.json())
  .then((data) => setPlayers(data.players)) },[]);

  const [players, setPlayers] = useState([]);

  const [isAvailable, setIsAvailable] = useState({
    isAvailable:true,
    status: "Available",
  });
  const handleAvailability =(status) =>{
    setIsAvailable({isAvailable:status==="Available",
      status: status});
  }

  // State to manage the coin count
  const [coin, setCoin] = useState(0);
  const handleCoin = () => {
    setCoin((prev) => prev + 5000000);
  };

  

  
  return (
    <>
      <Navbar coin={coin} />
      <Banner handleCoin={handleCoin} />
      <AllPlayers players={players} isAvailable={isAvailable} handleAvailability={handleAvailability}></AllPlayers>

      <ToastContainer position="top-center" autoClose={2000} theme="dark" />
    </>
  );
}

export default App;
