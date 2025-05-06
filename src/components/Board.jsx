import Square from "./Square";

export default function Board({ xIsNext, squares, onPlay }) {
  
  const haveNull = squares.filter((square) => !square);
  const winner = calculateWinner(squares);
  
  let status;
  if (winner) {
    status = `Winner is : ${winner} `;
  } else if (!winner && haveNull.length == 0) {
    status = `Game Tie`;
  } else {
    status = `Player ${xIsNext ? "❌" : "⭕"} to Move`;
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "❌" : "⭕";
    onPlay(nextSquares);
  }

  return (
    <div className="h-[50%] flex flex-col gap-3 justify-center ">
      <div className="text-[1.2rem] font-semibold tracking-wide text-purple-800 text-center border border-gray-300 bg-white p-2">
        {status}
      </div>
      <div>
        <div className="flex space-x-1.5 space-y-1.5">
          <Square
            value={squares[0]}
            onSquareClick={() => handleClick(0)}
            winner={winner}
          />
          <Square
            value={squares[1]}
            onSquareClick={() => handleClick(1)}
            winner={winner}
          />
          <Square
            value={squares[2]}
            onSquareClick={() => handleClick(2)}
            winner={winner}
          />
        </div>
        <div className="flex space-x-1.5 space-y-1.5">
          <Square
            value={squares[3]}
            onSquareClick={() => handleClick(3)}
            winner={winner}
          />
          <Square
            value={squares[4]}
            onSquareClick={() => handleClick(4)}
            winner={winner}
          />
          <Square
            value={squares[5]}
            onSquareClick={() => handleClick(5)}
            winner={winner}
          />
        </div>
        <div className="flex space-x-1.5">
          <Square
            value={squares[6]}
            onSquareClick={() => handleClick(6)}
            winner={winner}
          />
          <Square
            value={squares[7]}
            onSquareClick={() => handleClick(7)}
            winner={winner}
          />
          <Square
            value={squares[8]}
            onSquareClick={() => handleClick(8)}
            winner={winner}
          />
        </div>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}
