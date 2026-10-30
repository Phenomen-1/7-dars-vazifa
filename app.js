for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 1; i <= 30; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


let sum = 0;
for (let i = 1; i <= 50; i++) {
    sum += i;
}
console.log("Yig'indi:", sum);


let summa = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        sum += i;
    }
}
console.log("Toq sonlar yig'indisi:", sum);


let count = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log(i);
        count++;
    }
}
console.log("3 ga bo'linadigan sonlar soni:", count);



let raqam = 7;
for (let i = 1; i <= 10; i++) {
    console.log(`${raqam} x ${i} = ${raqam * i}`);
}


let number = -15;

if (number > 0) {
    for (let i = 1; i <= number; i++) {
        console.log(i);
    }
} else if (number < 0) {
    let absNumber = number * (-1); // modulini olish
    for (let i = 1; i <= absNumber; i++) {
        console.log(i);
    }
} else {
    console.log("Son nolga teng");
}


let secretNumber = 8;
for (let i = 1; i <= 10; i++) {
    if (i === secretNumber) {
        console.log("Son topildi");
        break;
    } else {
        console.log("Bu son emas");
    }
}

let numberN = 58324;
let countN = 0;

if (numberN === 0) {
    countN = 1;
} else {
    while (numberN > 0) {
        numberN = Math.floor(numberN / 10);
        countN++;
    }
}
console.log(`${countN} ta raqam`);



let numberS = 28;
let sumS = 0;

for (let i = 1; i < numberS; i++) {
    if (numberS% i === 0) {
        sumS += i;
    }
}

if (sumS === numberS) {
    console.log("Bu mukammal son");
} else {
    console.log("Bu mukammal son emas");
}