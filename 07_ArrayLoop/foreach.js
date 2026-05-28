//const coding = ["Python", "Java", "C++", "JavaScript", "Go", "Rust", "Kotlin", "Swift", "Ruby", "TypeScript"]
// coding.forEach( function (item) {
//     console.log(item)
// });

// coding.forEach( item => {
//     console.log(item)
// });

// function printMe(item)
// {
//     console.log(item)
// }
// coding.forEach(printMe)

const coding = ["Python", "Java", "C++", "JavaScript", "Go", "Rust", "Kotlin", "Swift", "Ruby", "TypeScript"]

coding.forEach((item, index, arr) => {
    console.log(item, index, arr)
});