import { useState } from 'react';

function Square(props) {
  return <button className="square" onClick={() => {props.handleFunction(props.index)}}>{props.value}</button>;
}
//Check the way React works with async
export default function Board() {
  const [isXTurnNext, setIsXTurnNext] = useState(true)
  const [mark, setMark] = useState("O")
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleMarkClick(i){
    if (squares[i] || calculateWinner(squares)){
      return;
    }
    if (isXTurnNext){
      setMark("X")
      setIsXTurnNext(false)
    }
    else{
      setMark("O")
      setIsXTurnNext(true)
    }
    var squaresCopy = squares.slice();
    squaresCopy[i] = mark;
    setSquares(squaresCopy);
  }
  return (
    <>
      <div className="board-row">
        <Square index={0} handleFunction={handleMarkClick} value={squares[0]} />
        <Square index={1} handleFunction={handleMarkClick} value={squares[1]} />
        <Square index={2} handleFunction={handleMarkClick} value={squares[2]} />
      </div>
      <div className="board-row">
        <Square index={3} handleFunction={handleMarkClick} value={squares[3]} />
        <Square index={4} handleFunction={handleMarkClick} value={squares[4]} />
        <Square index={5} handleFunction={handleMarkClick} value={squares[5]} />
      </div>
      <div className="board-row">
        <Square index={6} handleFunction={handleMarkClick} value={squares[6]} />
        <Square index={7} handleFunction={handleMarkClick} value={squares[7]} />
        <Square index={8} handleFunction={handleMarkClick} value={squares[8]} />
      </div>
    </>
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
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}