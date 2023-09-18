//Coding Challenge #1
console.log("Coding Challenge #1")
    //data1
const mark = [78, 169];
const john = [92, 195];
//data2
const mark2 = [95, 188];
const john2 = [85, 176];

function bMI(arr) {
    return arr[0] / arr[1] ** 2
}
console.log(`BMI Mark :${bMI(mark)}`);
console.log(`BMI Mark :${bMI(john)}`);
const markHigherBMI = bMI(mark) > bMI(john)
if (markHigherBMI == true)
    console.log("Mark cao hon John")
else
    console.log("John cao hon Mark")
    //Coding Challenge #2
console.log("Coding Challenge #2")
if (bMI(mark) > bMI(john))
    console.log("Mark's BMI is higher than John's!")
else
    console.log("John's BMI is higher than Mark's!")
console.log(`BMI Mark :${bMI(mark2)}`);
console.log(`BMI Mark :${bMI(john2)}`);
if (bMI(mark2) > bMI(john2))
    console.log(`Mark's  BMI (${bMI(mark).toFixed(5)}) is higher than John's (${bMI(john).toFixed(5)})!`)
else
    console.log(`John's  BMI (${bMI(john).toFixed(5)}) is higher than Matk's (${bMI(mark).toFixed(5)})!`)
    //Coding Challenge #3
console.log("Coding Challenge #3");
var scoreDophins = [96, 108, 89];
var scoreKoalas = [88, 91, 110];
var sumD = scoreDophins.reduce(function(total, curr) {
    return total + curr;
})
var sumK = scoreKoalas.reduce(function(total, curr) {
        return total + curr;
    })
    // 1. 
var avgD = sumD / scoreDophins.length;
console.log(`Diem trung binh cua Dophins la: ${avgD.toFixed(5)}`);
var avgK = sumK / scoreKoalas.length;
console.log(`Diem trung binh cua Koalas la: ${avgK.toFixed(5)}`);
// 2. 
if (avgD > avgK) {
    console.log("Dophins win");
} else if (avgD < avgK) {
    console.log("Koalas win");
} else {
    console.log("draw");
}
// 3. 
if (avgD >= 100 && avgD > avgK) {
    console.log("Dophins win!");
} else if (avgD >= 100 && avgD < avgK) {
    console.log("Koalas win!");
} else {

    console.log("Draw!");
}
// 4. 
if (avgD >= 100 && avgD > avgK) {
    console.log("Dophins win!");
} else if (avgD >= 100 && avgD < avgK) {
    console.log("Koalas win!");
} else if (avgD == avgK && avgD >= 100) {
    console.log("Draw!");
} else {
    console.log("No team wins the trophy!");
}
// Coding Challenge #4
console.log("Coding Challenge #4");
// 1.
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   2.
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);

// Coding Challenge #5
console.log("Coding Challenge #5");
var scoreD = [44, 23, 71];
var scoreK = [65, 54, 49];
var sumD2 = scoreD.reduce(function(total, curr) {
    return total + curr;
})
var sumK2 = scoreK.reduce(function(total, curr) {

    return total + curr;
})
var calcAverageD = sumD2 / scoreD.length;
var calcAverageK = sumK2 / scoreK.length;
console.log(`Diem trung binh cua doi Dolphins la: ${calcAverageD}`);
console.log(`Diem trung binh cua doi Koalas la: ${calcAverageK}`);
console.log(`Diem trung binh cua ca 2 doi là: ${(calcAverageD+calcAverageK)/2}`);
//Coding Challenge #6
/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
*/
//1.
console.log("Coding Challenge #6");
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
console.log(calcTip(100));
//2.
var bills = [125, 555, 44];
//3.
var tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
//4.
var total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(total);  
   /*
   Coding Challenge #7
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
*/
//1.
console.log("Coding Challenge #7");

function calcBMI(mass, height) {
    return mass / (height * height)
}   
var Mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

var John = {    
    fullName: 'Iohn Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

if (calcBMI(Mark.mass, Mark.height) > calcBMI(John.mass, John.height)) {    
    console.log(`${Mark.fullName}'s BMI (${Mark.calcBMI()}) is higher than ${John.fullName}'s (${John.calcBMI()})!`);
} else if (calcBMI(Mark.mass, Mark.height) < calcBMI(John.mass, John.height)) {    
    console.log(`${John.fullName}'s BMI (${John.calcBMI()}) is higher than ${Mark.fullName}'s (${Mark.calcBMI()})!`);
} else {
    console.log(`Both ${Mark.fullName} and ${John.fullName} have the same BMI (${Mark.calcBMI()})!`);
}   
/*Coding Challenge #8
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
*/
//1.
console.log("Coding Challenge #8");
var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
console.log(bills);
//2.
var tips = [];
var totals = [];
//3.    
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}   
for (var i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}
console.log(tips);
console.log(totals);    
//4.    Trung bình bill
function calcAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
/*Coding Challenge #9
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1
days ... 21oC in 2 days ... 23oC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]*/
//1.
console.log("Coding Challenge #9");
function printForecast(arr) {
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `... ${arr[i]}oC in ${i+1} days `;
    }
    console.log(str);
}
printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
/*JavaScript in the Browser: DOM and Events
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
*/
//1.
console.log("Coding Challenge #1");
var score = 20;
var secretNumber = Math.trunc(Math.random() * 20) + 1;
var highScore = 0;
console.log(secretNumber);
//2.
document.querySelector(".again").addEventListener("click", function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});





