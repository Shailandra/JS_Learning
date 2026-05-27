for (let k = 1; k <= 20; k++) {
    let row = "";
    for (let i = 1; i <= 20; i++) {
        // padEnd(4) ensures perfect visual column alignment
        row += String(i * k).padEnd(4); 
    }
    console.log(row);
}


let array = ['a','b','c','d','e']
array.forEach(element => {
console.log(element)    
});