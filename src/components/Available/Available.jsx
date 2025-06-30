import PropTypes from "prop-types";

const Available = ({ players, handleSelectedPlayers }) => {
  return (
    <div>
      <h2 className="text-xl font-bold my-4">Available Players</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {players.map((player) => {
          const {
            playerId,
            name,
            country,
            image,
            role,
            battingType,
            bowlingType,
            biddingPrice,
          } = player;

          return (
            <div
              key={playerId}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col space-y-2 hover:shadow-lg transition duration-300"
            >
              <img
                src={image}
                alt={name}
                className="w-[400px] h-[200px] object-cover rounded-lg"
              />

              <h3 className="text-lg font-bold mt-2 flex justify-start">
                👤 {name}
              </h3>

              <div className="flex justify-between items-center w-full">
                <p className="text-sm text-gray-600 flex items-center gap-1">
                  <span className="text-gray-500">🚩</span> {country}
                </p>
                <p className="text-sm bg-gray-100 px-2 py-1 rounded-full text-gray-800">
                  {role}
                </p>
              </div>

              <hr />

              <div className="text-sm text-gray-700 space-y-1">
                {role === "Batsman" && (
                  <p className="font-medium text-lg text-black flex justify-between">
                    Batting:{" "}
                    <span className="font-normal text-gray-600">
                      {battingType}
                    </span>
                  </p>
                )}
                {role === "Bowler" && (
                  <p className="font-medium text-lg text-black flex justify-between">
                    Bowling:{" "}
                    <span className="font-normal text-gray-600">
                      {bowlingType}
                    </span>
                  </p>
                )}
                {role === "All-rounder" && (
                  <>
                    <p className="font-medium text-lg text-black flex justify-between">
                      Batting:{" "}
                      <span className="font-normal text-gray-600">
                        {battingType}
                      </span>
                    </p>
                    <p className="font-medium text-lg text-black flex justify-between">
                      Bowling:{" "}
                      <span className="font-normal text-gray-600">
                        {bowlingType}
                      </span>
                    </p>
                  </>
                )}
                {role === "Wicketkeeper" && (
                  <p className="font-medium text-lg text-black flex justify-between">
                    Batting:{" "}
                    <span className="font-normal text-gray-600">
                      {battingType}
                    </span>
                  </p>
                )}
              </div>

              <div className="flex justify-between items-center mt-2">
                <p className="font-semibold text-green-600">
                  Price: ${Number(biddingPrice).toLocaleString()}
                </p>

                <button
                  onClick={() => handleSelectedPlayers(player)}
                  className="mt-2 bg-white border text-black hover:text-white px-4 py-1.5 rounded hover:bg-green-400 transition duration-200"
                >
                  Choose Player
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Available.propTypes = {};

export default Available;
