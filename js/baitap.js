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

