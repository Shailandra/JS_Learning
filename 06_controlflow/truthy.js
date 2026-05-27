//falsy Value

//false , 0, -0, BigInt 0n, "", null, undefined, Nan

//Truthy Value

//"0", [], 'false', " ", {}, function(){}

const emptObj = {}

if (Object.keys(emptObj).length === 0) {

    console.log("Object is empty");

}

//Nullish Coalescing Operator(??) : null undefined

let val1;
// val1 = 5??10

// val1 =null??10
val1 = 10 ?? undefined ?? 20
console.log(val1)



//Terniary operator condition should not be in () for examle (3>5)?:
3 > 5 ? console.log("true") : console.log("False")