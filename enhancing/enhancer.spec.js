const enhancer = require('./enhancer.js');
// test away!
const item = {
    name: "Chest Plate",
    durability: 47,
    enhancement: 20
}

//succeed
describe("Enhancer", () => {
    describe("Succeed()", () => {
        it("should return a new item object modified according to the rules for success", () => {
            expect(() => {
                succeed(item).toBe(item.enhancement == 9);
            }) 
            expect(() => {
                succeed(item).notToBe({ enhancement: 3 })
            })
            // console.log("item enhancement level", succeed(item))
        })
    })
})

//repair
describe('Enhancer', () => {
    describe('Repair()', () => {
        it('should return item object with durability of 100', () => {
            expect(() => {
                repair(item).toBe(item.durability === 100);
            }) 
        })
    })
})