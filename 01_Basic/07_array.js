// const arr1 =  [1,2,[3,4],[5,[6,7]]]
// new1= arr1.flat(Infinity)
// console.log(new1)


const dc_heros = ["Batman", "Superman", "Flash"]
const marvel_heros = ["Ironman", "Hulk", "Captain"]

// dc_heros.push(marvel_heros)
// console.log(dc_heros) // [ 'Batman', 'Superman', 'Flash', [ 'Ironman', 'Hulk', 'Captain' ] ]

const all_heros = [...dc_heros,...marvel_heros] // ...  spread operator
console.log(all_heros) // [ 'Batman', 'Superman', 'Flash', 'Ironman', 'Hulk', 'Captain' ]

