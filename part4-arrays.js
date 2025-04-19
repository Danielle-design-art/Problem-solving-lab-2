console.log("arrays hello world");

console.log("My Favorite Foods")

let foods = ["Pizza", "Spaghetti", "Crawfish Boudin", "Chowder", "Hamburger", "Cake"];

console.log(foods);

console.log(foods.length);

console.log(foods[0]);

console.log(foods[foods.length - 1]);

foods.push("Shrimp Fettucini");



console.log("Guest List");

let guests = ["Annette", "Brandy", "Louise", "Layla", "Kirby", "Ted", "Franklin", "Rebecca", "Gina"];

console.log(guests)

guests.shift();

guests.push("Lisa")

console.log(guests.length)



console.log("Weekend Tasks")

let tasks = [
    "grocery shopping", 
    "cut grass", 
    "car maintenance", 
    "laundry", 
    "aquascaping", 
    "Family Night"
];

console.log(tasks)

function printTasks(tasks) {
    for (let i = 0; i < tasks.length; i++) {
      console.log(tasks[i]);
    }
  }
  
  const myTasks = [
    "grocery shopping", 
    "cut grass", 
    "car maintenance", 
    "laundry", 
    "aquascaping", 
    "Family Night"
];
printTasks(myTasks);

  
console.log("Reverse It")

let numbers = ["1","2","3","4","5"];

console.log(numbers)

console.log(numbers[4])
console.log(numbers[3])
console.log(numbers[2])
console.log(numbers[1])
console.log(numbers[0])


function reverseArray(arr) {
    const newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      newArr.push(arr[i]);
    }
    return newArr;
  }
  
  const originalArray = [1, 2, 3, 4, 5];
  const reversedArray = reverseArray(originalArray);
  console.log(reversedArray); // Output: [5, 4, 3, 2, 1]



console.log("Random Lunches")

let Lunches = ["Tacos", "Gyros", "Salad", "Dumplings"];

console.log(Lunches)