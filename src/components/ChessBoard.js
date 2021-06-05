import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessQueen } from '@fortawesome/free-solid-svg-icons';

import '../styles/ChessBoard.css';

function ChessBoard(props) {

    return (

        <div className="solutions">

            {
                props.solutions !== null && 
                props.index !== -1 && 
                props.n !== '' && 
                props.solutions[props.index].length === parseInt(props.n)

                ?

                <table className="chess-board">
                    <tbody>


                        { 
                            props.solutions[props.index].map((solutionIndex, index) => (
                                <tr key={"tr" + index}>
                                    {
                                        new Array(parseInt(props.n)).fill(true).map((value, index2) => (
                                            <td key={"td" + index2}>
                                                {
                                                    solutionIndex === index2 ? <FontAwesomeIcon icon={faChessQueen} /> : ' '
                                                }
                                            </td>
                                        ))
                                    }
                                </tr>

                            ))
                        }
                    </tbody>

                </table>

                :
                <h1>Chess Component</h1>
            }


        </div>

        
    );

}

export default ChessBoard;