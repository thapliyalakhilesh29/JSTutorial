// for Loop


// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(index);
// }



// const superHeros = ["Batman", "Superman", "Flash"]
// for (let i = 0; i < superHeros.length; i++) {
//     const element = superHeros[i];
//     console.log(element);
// }



// Nested for loop- print table from 1 to 15

for (let i = 1; i <= 15; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ` , i*j);
    }
    console.log(); // print space between to table
}