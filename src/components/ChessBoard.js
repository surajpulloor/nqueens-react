import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessQueen } from '@fortawesome/free-solid-svg-icons';

import PropTypes from "prop-types";

import '../styles/ChessBoard.css';

function ChessBoard(props) {

    return (

        <div className="solutions">

            {
                props.solutions && 
                props.index !== -1 && 
                props.n !== '' && 
                props.isNum &&
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
                <div className="chess-board-structure">
                    {
                        props.n !== '' &&
                        props.isNum

                        ?
                        
                        <table className="chess-board">

                            <tbody>

                                {
                                    new Array(parseInt(props.n)).fill(false).map((value, index) => (
                                        <tr key={"tr-structure" + index}>
                                        {
            
                                            new Array(parseInt(props.n)).fill(false).map((value, index) => (
                                                <td key={"td-structure" + index}>&nbsp;</td>
                                            ))
            
                                        }
                                    
                                        </tr>
                                    ))
                                }


                            </tbody>
                        
                            
                        </table>

                        :

                        <div className="message">
                            <h1>The nxn chessboard will be displayed here. Give your 'N' and click on 'Solve'</h1>
                        </div>

                    }
                </div>
            }


        </div>

        
    );

}

ChessBoard.propTypes = {
    solutions: PropTypes.array,
    index: PropTypes.number,
    n: PropTypes.string,
    isNum: PropTypes.bool
};

export default ChessBoard;