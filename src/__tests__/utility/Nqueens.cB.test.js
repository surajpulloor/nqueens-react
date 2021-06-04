import Nqueens from '../utility/Nqueens';

// const Nqueens = require('../utility/Nqueens');


const nqueens = new Nqueens(8);


describe("Testing constructBoard()", () => {
    test("First Row", () => {

        expect(nqueens.board[0]).toEqual(new Array(nqueens.n).fill(false));

    });

    test("Second Row", () => {

        expect(nqueens.board[1]).toEqual(new Array(nqueens.n).fill(false));

    });

    test("Third Row", () => {

        expect(nqueens.board[2]).toEqual(new Array(nqueens.n).fill(false));

    });

    test("Fourth Row", () => {

        expect(nqueens.board[3]).toEqual(new Array(nqueens.n).fill(false));

    });

    test("Fifth Row", () => {

        expect(nqueens.board[4]).toEqual(new Array(nqueens.n).fill(false));

    });
});