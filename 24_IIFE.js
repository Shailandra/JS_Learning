//Immediately Invoked Function Expression (IIFE)

(function chai()
{
    console.log("DB Connected");
    
})();

//(function Defination)(function call)

((name)=>{console.log(`DB Connected Two ${name} `)})("Shailandra");