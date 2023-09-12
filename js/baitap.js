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