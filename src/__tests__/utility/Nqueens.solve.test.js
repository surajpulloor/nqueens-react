import Nqueens from '../../utility/Nqueens';


describe("Testing Solve()", () => {

    describe("For 8 Queens", () => {

        
        const nqueens = new Nqueens(8);
        const solutions = nqueens.solve(0);

        test("1st Solution", () => {

            expect(solutions[0]).toEqual([1, 5, 8, 6, 3, 7, 2, 4])

        });

        test("23rd Solution", () => {

            expect(solutions[22]).toEqual([3, 6, 8, 1, 4, 7, 5, 2])

        });

        test("9th Solution", () => {

            expect(solutions[8]).toEqual([2, 7, 3, 6, 8, 5, 1, 4])

        });

        test("65th Solution", () => {

            expect(solutions[64]).toEqual([6, 1, 5, 2, 8, 3, 7, 4])

        });

    });



    describe("For 5 Queens", () => {

        
        const nqueens = new Nqueens(8);
        const solutions = nqueens.solve(0);

        test("3rd Solution", () => {

            expect(solutions[2]).toEqual([2, 4, 1, 3, 5])

        });

        test("7th Solution", () => {

            expect(solutions[6]).toEqual([4, 1, 3, 5, 2])

        });

        test("9th Solution", () => {

            expect(solutions[8]).toEqual([5, 2, 4, 1, 3])

        });

        test("10th Solution", () => {

            expect(solutions[9]).toEqual([5, 3, 1, 4, 2])

        });

    });

    

});