import React from 'react';
import { NavLink } from 'react-router-dom';
import './QuizHeader.css'

const boldStyle = ({isActive}) => ({
    fontWeight: isActive ? "bold" : "normal",
   });

export default function QuizHeader() {
    return (
        <>
            <div id="QuizHeader">
                <NavLink style={boldStyle} to="loser">Choose the Loser!</NavLink>
                <NavLink style={boldStyle} to="tictactoe" >Tic Tac Toe</NavLink>
            </div>
        </>
    )    
}

