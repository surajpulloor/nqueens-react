import Nqueens from '../../utility/Nqueens';

const nqueens = new Nqueens(8);


describe("Testing isSafe()", () => {
    const row = 4;
    const col = 3;

    test("test left diagonal", () => {
        // board config when the piece collides with the first cell
        nqueens.board[2][1] = true;
    
        expect(nqueens.isSafe(row, col)).toBe(false);

         // reset the board
         nqueens.board[2][1] = false;
    });


    test("test right diagonal", () => {
        // board config when the piece collides with the first cell
        nqueens.board[1][6] = true;
    
        expect(nqueens.isSafe(row, col)).toBe(false);

         // reset the board
         nqueens.board[1][6] = false;
    });


    test("test vertically", () => {
        // board config when the piece collides with the first cell
        nqueens.board[2][3] = true;
    
        expect(nqueens.isSafe(row, col)).toBe(false);

         // reset the board
         nqueens.board[2][3] = false;
    });


    test("isSafe() is true", () => {
        expect(nqueens.isSafe(row, col)).toBe(true);
    });
});