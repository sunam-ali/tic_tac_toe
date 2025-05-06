import { useState } from "react";
import Board from "./components/Board";
import History from "./components/History";
import Footer from "./components/Footer";

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    setXIsNext(!xIsNext);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
    setXIsNext(move % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `move ${move}`;
    } else {
      return;
    }

    return (
      <li key={move}>
        <button
          onClick={() => jumpTo(move)}
          className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-2 focus:ring-purple-300 font-medium rounded text-sm px-5 py-2"
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="h-screen bg-blue-100 flex flex-col justify-center items-center font-poppins p-4 py-8">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      <History moves={moves} />
      <Footer/>
    </div>
  );
}

export default App;
