const {succeed, fail, repair, get} = require('./enhancer.js');
// test away!
const item = {
    name: "Chest Plate",
    durability: 47,
    enhancement: 15
}

//succeed
describe("Enhancer", () => {
    // describe("Succeed()", () => {
    //     it("should return a new item object modified according to the rules for success", () => {
    //         expect(() => {
    //             succeed(item).toBe(item.enhancement === 26);
    //         }) 
    //         // expect(() => {
    //         //     succeed(item).notToBe({ enhancement: 3 })
    //         // })
    //         // console.log("item enhancement level", succeed(item))
    //     })
    // })

    describe("Succeed", () => {

        it("if enhancement is greater than 20 then reset to 20", () => {
            expect(succeed({ name: "Chest Plate", durability: 47, enhancement: 21 }))
            .toStrictEqual({ name: "Chest Plate", durability: 47, enhancement: 20 })
        })
        it("if enhancement is less than 20 then increment by 1", () => {
            expect(succeed(item).enhancement).toBe(16)

        })
    })

    //repair
    describe('Repair()', () => {
        it('should return item object with durability of 100', () => {
            expect(() => {
                repair(item).toBe(item.durability === 100);
            }) 
        })
    })

    //fail
    describe("Fail", () => {

        it("If the item's enhancement is less than 15, the durability of the item is decreased by 5", () => {
            expect(fail({ name: "Chest Plate", durability: 47, enhancement: 10 }))
            .toStrictEqual({ name: "Chest Plate", durability: 42, enhancement: 10 })
        })

        it("If the item's enhancement is 15 or more, the durability of the item is decreased by 10", () => {
            expect(fail({ name: "Chest Plate", durability: 47, enhancement: 16 }))
            .toStrictEqual({ name: "Chest Plate", durability: 37, enhancement: 16 })
        })

        it("If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17)", () => {
            expect(fail({ name: "Chest Plate", durability: 47, enhancement: 17 }))
            .toStrictEqual({ name: "Chest Plate", durability: 37, enhancement: 16 })
        })

    })

})



