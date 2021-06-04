import Nqueens from '../utility/Nqueens';

// const Nqueens = require('../utility/Nqueens');

describe("Nqueens Tests", () => {

    const nqueens = new Nqueens(8);

    test("Testing constructBoard()", () => {
        nqueens.constructBoard();
        expect(nqueens.board[0]).toEqual(new Array(8));
        expect(nqueens.board[1]).toEqual(new Array(8));
        expect(nqueens.board[1]).toEqual(new Array(8));
    });

    test("Testing collidingVertically()", () => {

    });

    test("Testing collidingDiagonally()", () => {

    });

    test("Testing isSafe()", () => {

    });

    test("Testing solve()", () => {

    });

});