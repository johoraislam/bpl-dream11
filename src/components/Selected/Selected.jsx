import PropTypes from "prop-types";

const Selected = ({ selectedPlayers,handleRemovedPlayer,handleAvailability }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4 text-center">Selected Players</h2>

      {selectedPlayers.length === 0 ? (
        <p className="text-center text-gray-500">No players selected yet.</p>
      ) : (
        <div>
          {selectedPlayers.map((player) => {
            const { playerId, name, image, role, biddingPrice } = player;

            return (
              <div className="flex justify-between items-center border border-gray-300 rounded-lg py-2 my-2 px-2 mx-8" key={playerId}>
                <div
                  className="bg-white shadow-md rounded-xl p-4 flex gap-2 space-y-2 hover:shadow-lg transition duration-300"
                >
                  <img
                  src={image}
                  alt={name}
                  className="w-[100px] object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-bold">👤 {name}</h3>
                  <p className="text-sm text-gray-700">🎯 Role: {role}</p>
                  <p className="font-semibold text-green-600">
                    Price: ${Number(biddingPrice).toLocaleString()}
                  </p>
                </div>
              </div>
              <button onClick={() => handleRemovedPlayer(playerId)} className="bg-red-500 text-white px-2 py-1 rounded-md">Remove</button>
              </div>
            );
          })}
        </div>
      )}
      <button onClick={() => handleAvailability("Available")} className="mt-4 bg-green-500 text-white px-4 py-2 mx-8 rounded-md">Selected more Players</button>
    </div>
  );
};

Selected.propTypes = {
  selectedPlayers: PropTypes.array.isRequired,
  handleRemovedPlayer: PropTypes.func.isRequired,
  handleAvailability: PropTypes.func.isRequired,
};

export default Selected;
