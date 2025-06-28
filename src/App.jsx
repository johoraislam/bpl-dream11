import PropTypes from "prop-types"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import Navbar from "./components/Navbar/Navbar"
import Bannar from "./components/Bannar/Bannar"
import { useState } from "react"

function App() {
  const [coin, setCoin] = useState(0);

  const handleCoin = () => {
    const newCoin = coin + 1200;
    setCoin(newCoin);
  }

  return (
    <>
      <Navbar coin={coin} />
      <Bannar handleCoin={handleCoin}></Bannar>


      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="dark"
      />

    </>
  )
}

export default App
