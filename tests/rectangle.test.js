const getRectanglePerimeter = require("../js/rectangle").first;
const getRectangleArea = require("../js/rectangle").second;
const getRectangleInfo = require("../js/rectangle").third;




test('properly returns the perimeter of a given rectangle "2(a+b)"', ()=> {
    expect(getRectanglePerimeter(5,10)).toBe(30);
})

test('properly returns the calculated area of a given rectangle "a * b"', ()=> {
    expect(getRectangleArea(5,10)).toBe(50);
})

test('properly outputs the given rectangles information to console log in string format', ()=>{
    global.console = {log: jest.fn()};
    getRectangleInfo(5,10)
    expect(global.console.log).toHaveBeenCalledWith('The perimeter of a rectangle is 30 and the area is 50')
})

console.log('1')