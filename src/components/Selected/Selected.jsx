import PropTypes from "prop-types";

const Selected = ({ selectedPlayers,handleRemovedPlayer,setView }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4 text-center">Selected Players</h2>

      {selectedPlayers.length === 0 ? (
        <p className="text-center text-gray-500">No players selected yet.</p>
      ) : (
        <div className="border border-gray-300 rounded-lg p-4 space-y-4 shadow-2xl">
          {selectedPlayers.map((player) => {
            const { playerId, name, image, role, biddingPrice } = player;

            return (
              <div className="flex justify-between items-center" key={playerId}>
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
      <button onClick={() => setView("available")} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">View Available Players</button>
    </div>
  );
};

Selected.propTypes = {
  selectedPlayers: PropTypes.array.isRequired,
  handleRemovedPlayer: PropTypes.func.isRequired,
};

export default Selected;
