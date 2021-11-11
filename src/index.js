import React from 'react';
import ReactDOM from 'react-dom';
import {LoserApp, TicTacToe} from './QuizComponents';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import QuizHeader from './QuizHeader';

ReactDOM.render(
    <Router>
      <QuizHeader />
        <Routes>
          <Route path="tictactoe" element={<TicTacToe />}/>
          <Route path="*" element={<LoserApp />} />

        </Routes>
      </Router>,
  document.getElementById('root')
);
