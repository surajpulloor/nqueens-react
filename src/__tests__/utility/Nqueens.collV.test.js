import Nqueens from '../../utility/Nqueens';

// const Nqueens = require('../utility/Nqueens');


const nqueens = new Nqueens(8);



describe("Testing collidingVertically()", () => {
    describe("collision", () => {

        const row = 6;
        
    
        test("colliding at (0, 0)", () => {
    
            // board config when the piece collides with the first cell
            nqueens.board[0][0] = true;
    
            expect(nqueens.collidingVertically(row, 0)).toBe(true);
    
            // reset the board
            nqueens.board[0][0] = false;
    
        });
    
        test("colliding at (1, 4)", () => {
    
            // board config when the piece collides with the first cell
            nqueens.board[1][4] = true;
    
            expect(nqueens.collidingVertically(row, 4)).toBe(true);
    
             // reset the board
             nqueens.board[1][4] = false;
    
        });
    
        test("colliding at (3, 6)", () => {
    
            // board config when the piece collides with the first cell
            nqueens.board[3][6] = true;
    
            expect(nqueens.collidingVertically(row, 6)).toBe(true);
    
             // reset the board
             nqueens.board[3][6] = false;
    
        });
    
        test("colliding at (5, 1)", () => {
    
            // board config when the piece collides with the first cell
            nqueens.board[5][1] = true;
    
            expect(nqueens.collidingVertically(row, 1)).toBe(true);
    
             // reset the board
             nqueens.board[5][1] = false;
    
        });
    
        test("colliding at (2, 4)", () => {
    
            // board config when the piece collides with the first cell
            nqueens.board[2][4] = true;
    
            expect(nqueens.collidingVertically(row, 4)).toBe(true);
    
             // reset the board
             nqueens.board[2][4] = false;
    
        });
    
    
    });
    
    
    describe("non-collision", () => {
    
        const row = 6;
        
    
        test("not-colliding at (0, 0)", () => {
    
            expect(nqueens.collidingVertically(row, 0)).toBe(false);
    
        });
    
        test("not-colliding at (1, 4)", () => {
    
            expect(nqueens.collidingVertically(row, 4)).toBe(false);
    
        });
    
        test("not-colliding at (3, 6)", () => {
    
            expect(nqueens.collidingVertically(row, 6)).toBe(false);
    
        });
    
        test("not-colliding at (5, 1)", () => {
    
            expect(nqueens.collidingVertically(row, 1)).toBe(false);
    
        });
    
        test("not-colliding at (2, 4)", () => {
    
            expect(nqueens.collidingVertically(row, 4)).toBe(false);
    
        });
    
    
    });
});