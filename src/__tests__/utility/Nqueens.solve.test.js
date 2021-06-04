import Nqueens from '../../utility/Nqueens';


describe("Testing Solve()", () => {

    describe("For 8 Queens", () => {

        
        const nqueens = new Nqueens(8);
        const solutions = nqueens.solve(0);

        test("1st Solution", () => {

            expect(solutions[0]).toEqual([0, 4, 7, 5, 2, 6, 1, 3])

        });

        test("23rd Solution", () => {

            expect(solutions[22]).toEqual([2, 5, 7, 0, 3, 6, 4, 1])

        });

        test("9th Solution", () => {

            expect(solutions[8]).toEqual([1, 5, 7, 2, 0, 3, 6, 4])

        });

        test("65th Solution", () => {

            expect(solutions[64]).toEqual([5, 0, 4, 1, 7, 2, 6, 3])

        });


        test("29th Solution", () => {

            expect(solutions[28]).toEqual([3, 0, 4, 7, 1, 6, 2, 5]);

        });

    });



    describe("For 5 Queens", () => {

        
        const nqueens = new Nqueens(5);
        const solutions = nqueens.solve(0);

        test("3rd Solution", () => {

            expect(solutions[2]).toEqual([1, 3, 0, 2, 4])

        });

        test("7th Solution", () => {

            expect(solutions[6]).toEqual([3, 0, 2, 4, 1])

        });

        test("9th Solution", () => {

            expect(solutions[8]).toEqual([4, 1, 3, 0, 2])

        });

        test("10th Solution", () => {

            expect(solutions[9]).toEqual([4, 2, 0, 3, 1])

        });

    });

    

});