import Nqueens from '../../utility/Nqueens';

// const Nqueens = require('../utility/Nqueens');


const nqueens = new Nqueens(8);



describe("Testing collidingDiagonally() for row = 7, col = 3 i.e last row and middle col", () => {

    const row = 7;
    const col = 3;

    describe("Checking right diagonals", () => {
        test("colliding at (5, 5)", () => {

            // board config when the piece collides with the first cell
            nqueens.board[5][5] = true;
    
            expect(nqueens.collidingDiagonally(row, col)).toBe(true);
    
             // reset the board
             nqueens.board[5][5] = false;
    
        });
    
        test("colliding at (4, 6)", () => {
    
            // board config when the piece collides with the first cell
            nqueens.board[4][6] = true;
    
            expect(nqueens.collidingDiagonally(row, col)).toBe(true);
    
             // reset the board
             nqueens.board[4][6] = false;
    
        });


        test("colliding at (7, 3)", () => {
    
            // board config when the piece collides with the first cell
            nqueens.board[7][3] = true;
    
            expect(nqueens.collidingDiagonally(row, col)).toBe(true);
    
             // reset the board
             nqueens.board[7][3] = false;
    
        });
    });


    describe("Checking left diagonals", () => {

        test("colliding at (5, 1)", () => {

            // board config when the piece collides with the first cell
            nqueens.board[5][1] = true;
    
            expect(nqueens.collidingDiagonally(row, col)).toBe(true);
    
             // reset the board
             nqueens.board[5][1] = false;
    
        });
    
    
        test("colliding at (6, 2)", () => {
    
            // board config when the piece collides with the first cell
            nqueens.board[6][2] = true;
    
            expect(nqueens.collidingDiagonally(row, col)).toBe(true);
    
             // reset the board
             nqueens.board[6][2] = false;
    
        });
    
        test("colliding at (4, 0)", () => {
    
            // board config when the piece collides with the first cell
            nqueens.board[4][0] = true;
    
            expect(nqueens.collidingDiagonally(row, col)).toBe(true);
    
             // reset the board
             nqueens.board[4][0] = false;
    
        });

    });

});




describe("Testing collidingDiagonally() for row = 3, col = 4 i.e middle of the board", () => {

    const row = 3;
    const col = 4;

    describe("Checking right diagonals", () => {
        test("colliding at (2, 4)", () => {

            // board config when the piece collides with the first cell
            nqueens.board[2][5] = true;
    
            expect(nqueens.collidingDiagonally(row, col)).toBe(true);
    
             // reset the board
             nqueens.board[2][5] = false;
    
        });
    
        test("colliding at (1, 6)", () => {
    
            // board config when the piece collides with the first cell
            nqueens.board[1][6] = true;
    
            expect(nqueens.collidingDiagonally(row, col)).toBe(true);
    
             // reset the board
             nqueens.board[1][6] = false;
    
        });


        test("colliding at (0, 7)", () => {
    
            // board config when the piece collides with the first cell
            nqueens.board[0][7] = true;
    
            expect(nqueens.collidingDiagonally(row, col)).toBe(true);
    
             // reset the board
             nqueens.board[0][7] = false;
    
        });
    });


    describe("Checking left diagonals", () => {

        test("colliding at (2, 3)", () => {

            // board config when the piece collides with the first cell
            nqueens.board[2][3] = true;
    
            expect(nqueens.collidingDiagonally(row, col)).toBe(true);
    
             // reset the board
             nqueens.board[2][3] = false;
    
        });
    
    
        test("colliding at (1, 2)", () => {
    
            // board config when the piece collides with the first cell
            nqueens.board[1][2] = true;
    
            expect(nqueens.collidingDiagonally(row, col)).toBe(true);
    
             // reset the board
             nqueens.board[1][2] = false;
    
        });
    
        test("colliding at (0, 1)", () => {
    
            // board config when the piece collides with the first cell
            nqueens.board[0][1] = true;
    
            expect(nqueens.collidingDiagonally(row, col)).toBe(true);
    
             // reset the board
             nqueens.board[0][1] = false;
    
        });

    });

});




describe("Testing collidingDiagonally() for row = 4, col = 1 i.e left of the board", () => {

    const row = 4;
    const col = 1;

    describe("Checking right diagonals", () => {
        test("colliding at (3, 2)", () => {

            // board config when the piece collides with the first cell
            nqueens.board[3][2] = true;
    
            expect(nqueens.collidingDiagonally(row, col)).toBe(true);
    
             // reset the board
             nqueens.board[3][2] = false;
    
        });
    
        test("colliding at (2, 3)", () => {
    
            // board config when the piece collides with the first cell
            nqueens.board[2][3] = true;
    
            expect(nqueens.collidingDiagonally(row, col)).toBe(true);
    
             // reset the board
             nqueens.board[2][3] = false;
    
        });


        test("colliding at (1, 4)", () => {
    
            // board config when the piece collides with the first cell
            nqueens.board[1][4] = true;
    
            expect(nqueens.collidingDiagonally(row, col)).toBe(true);
    
             // reset the board
             nqueens.board[1][4] = false;
    
        });


        test("colliding at (0, 5)", () => {
    
            // board config when the piece collides with the first cell
            nqueens.board[0][5] = true;
    
            expect(nqueens.collidingDiagonally(row, col)).toBe(true);
    
             // reset the board
             nqueens.board[0][5] = false;
    
        });
    });


    describe("Checking left diagonals", () => {

        test("colliding at (3, 0)", () => {

            // board config when the piece collides with the first cell
            nqueens.board[3][0] = true;
    
            expect(nqueens.collidingDiagonally(row, col)).toBe(true);
    
             // reset the board
             nqueens.board[3][0] = false;
    
        });

    });

});



describe("Testing collidingDiagonally() for row = 4, col = 6 i.e right of the board", () => {

    const row = 4;
    const col = 6;

    describe("Checking right diagonals", () => {
        test("colliding at (3, 7)", () => {

            // board config when the piece collides with the first cell
            nqueens.board[3][7] = true;
    
            expect(nqueens.collidingDiagonally(row, col)).toBe(true);
    
             // reset the board
             nqueens.board[3][7] = false;
    
        });
    
        
    });


    describe("Checking left diagonals", () => {

        test("colliding at (3, 5)", () => {

            // board config when the piece collides with the first cell
            nqueens.board[3][5] = true;
    
            expect(nqueens.collidingDiagonally(row, col)).toBe(true);
    
             // reset the board
             nqueens.board[3][5] = false;
    
        });
    
    
        test("colliding at (2, 4)", () => {
    
            // board config when the piece collides with the first cell
            nqueens.board[2][4] = true;
    
            expect(nqueens.collidingDiagonally(row, col)).toBe(true);
    
             // reset the board
             nqueens.board[2][4] = false;
    
        });
    
        test("colliding at (1, 3)", () => {
    
            // board config when the piece collides with the first cell
            nqueens.board[1][3] = true;
    
            expect(nqueens.collidingDiagonally(row, col)).toBe(true);
    
             // reset the board
             nqueens.board[1][3] = false;
    
        });


        test("colliding at (0, 2)", () => {
    
            // board config when the piece collides with the first cell
            nqueens.board[0][2] = true;
    
            expect(nqueens.collidingDiagonally(row, col)).toBe(true);
    
             // reset the board
             nqueens.board[0][2] = false;
    
        });

    });

});

