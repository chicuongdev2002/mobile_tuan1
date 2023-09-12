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
// 1.
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   2.
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);
// Coding Challenge #5
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
console.log("Coding Challenge #6")
    // 1.
const tipC = 0;
const billC = 0;

function calcTip(billC) {
    return tipC = billC >= 50 && billC <= 300 ? billC * 0.15 : billC * 0.2;
}
console.log(`Tien tip cho hoa don: ${billC} la: ${calcTip(125)}`);