import React, { useReducer, useState } from 'react';
import './QuizComponents.css';

// My Name: __

// Question 1 - Who Pays The Bill
export function LoserApp() {

  const [friendsState, setFriendsState] = useState([]);
  const [friendInputState, setFriendInputState] = useState("");

  return (<>
    <ul>
      {friendsState.map((friendName) => <li class="FriendName">{friendName}</li>)}
    </ul>
    <input type="text" value={friendInputState}
      onChange={(inputEvent) => { console.log(inputEvent.target.value) }}></input>
    <button onClick={() => { }}>Add Friend</button>
    <button onClick={() => { }}>Select Loser!</button>
    <SelectedLoser />
  </>
  );
}

export function SelectedLoser(props) {

  const { selectedFriend, removeFunction } = props;

  return (
    <div id="SelectedLoserForm">
      <div id="SelectedFriend">
        {selectedFriend || '?'}
      </div>
      <button onClick={() => removeFunction()}>Remove from friend list </button>
    </div>
  );
}


// Finish - Tic Tac Toe
function ticTacToeReducer(state, action) {
  if (action.type === "tileClick") {
    const { x, y } = action;

    const currentValue = state.board[x][y];
    if (currentValue === "X") {
      state.board[x][y] = "O";
    } else {
      state.board[x][y] = "X";
    }
    state.board = [...state.board];
    return { ...state }
  }
  return state;
}

const ticTacToeInitialBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const ticTacToeInitialState = {
  board: ticTacToeInitialBoard,
}


export function TicTacToe() {
  const [ticTacToeBoardState, ticTacToeBoardDispatch] = useReducer(
    ticTacToeReducer,
    ticTacToeInitialState,
  )

  const boardComponent = []
  ticTacToeBoardState.board.forEach((row, x) => {
    row.forEach((tile, y) =>

      boardComponent.push(<div class="TicTacToeTile"
        onClick={() => ticTacToeBoardDispatch({
          type: "tileClick",
          x,
          y,
        })} >{tile}</div>)
    )
  });

  return (
    <div id="TicTacToe">
      {/* Display the winner (X or Y) here!
        <div id="TicTacToeWinner">{"X wins!"}</div>
      */}
      <div id="TicTacToeBoard">
        {boardComponent}
      </div>
    </div>
  );
}