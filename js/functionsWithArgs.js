// Functions witn Arguments
function square(x) {
  let result = x * x;
  console.log(result);
}

square(3);
square(12);

function area(length, width) {
  let area = length * width;
  console.log(area);
}

area(20, 10);
area(30, 20);

let plane = 1100;
let hotel = 800;
let food = 600;

function budget(plane, hotel, food) {
  let total = plane + hotel + food;
  let perDay = total / 14;
  console.log(`Your vacation will cost you ${total}.`);
  console.log(`Your daily cost is ${perDay}.`);
}

budget(plane, hotel, food);
budget(1000, 700, 550);
budget(1000, 1200, 700);
