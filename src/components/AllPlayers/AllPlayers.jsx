import PropTypes from 'prop-types'
import Available from '../Available/Available'
import Selected from '../Selected/Selected'

const AllPlayers = ({players, handleAvailability,isAvailable}) => {
  return (
    <div>  

      <div className='flex  justify-end mx-8 my-4'>
        <button className={`font-extrabold ${isAvailable.status==="Available" ? 'font-bold bg-yellow-400  text-white px-2 py-1.5 rounded-tl-md rounded-bl-md' : ' font-bold bg-white text-gray-600 border border-gray-500 rounded-tl-md rounded-bl-md px-2 py-1.5 '}`} onClick={() => handleAvailability("Available")}>Available</button>
        <button className={`font-extrabold ${isAvailable.status==="Selected" ? 'font-bold bg-yellow-400  text-white px-2 py-1.5 rounded-tr-md rounded-br-md' : ' font-bold bg-white text-gray-600 border border-gray-500 rounded-tr-md rounded-br-md px-2 py-1.5 '}`} onClick={() => handleAvailability("Selected")}>Selected</button>
      </div>
        {
          isAvailable.isAvailable ? 
          <Available players={players} handleAvailability={handleAvailability} /> : 
          <Selected players={players} handleAvailability={handleAvailability} />
        }
    </div>
  )
}

AllPlayers.propTypes = {
    players: PropTypes.array.isRequired,
    handleAvailability: PropTypes.func.isRequired
}

export default AllPlayers