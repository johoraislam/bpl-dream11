// App.jsx
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import AllPlayers from "./components/AllPlayers/AllPlayers";

function App() {
  useEffect(() => {
    fetch("./fake.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data.players));
  }, []);

  const [view, setView] = useState("available");
  

  const [players, setPlayers] = useState([]);

  const [isAvailable, setIsAvailable] = useState({
    isAvailable: true,
    status: "Available",
  });
  const handleAvailability = (status) => {
    setIsAvailable({ isAvailable: status === "Available", status: status });
  };

  const handleRemovedPlayer = (playerId) => {
    setSelectedPlayers((prev) => prev.filter((p) => p.playerId !== playerId));
  };

  // State to manage selected players
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleSelectedPlayers = (player) => {
    const isExist = selectedPlayers.find((p) => p.playerId === player.playerId);
    const biddingPrice = Number(player.biddingPrice);

    if (isExist) {
      toast.error("Player already selected!");
      return;
    }

    if (coin < biddingPrice) {
      toast.error("Insufficient coins!");
      return;
    }

    if (selectedPlayers.length >= 6) {
      toast.error("You can only select 5 players!");
      return;
    }
    setSelectedPlayers((prev) => [...prev, player]);
    setCoin((prev) => prev - biddingPrice);
    toast.success(`Playerselected successfully!`);
  };

  // State to manage the coin count
  const [coin, setCoin] = useState(0);
  const handleCoin = () => {
    setCoin((prev) => prev + 5000000);
  };

  return (
    <>
      <Navbar coin={coin} />
      <Banner handleCoin={handleCoin} />
      <AllPlayers
        players={players}
        isAvailable={isAvailable}
        handleAvailability={handleAvailability}
        handleSelectedPlayers={handleSelectedPlayers}
        selectedPlayers={selectedPlayers}
        handleRemovedPlayer={handleRemovedPlayer}
        view={view}
      ></AllPlayers>

      <ToastContainer position="top-center" autoClose={2000} theme="dark" />
    </>
  );
}

export default App;
