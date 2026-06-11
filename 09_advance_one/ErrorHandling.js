async function errorHanling() {
    try {

        const respone = await fetch('https://jsonplaceholder.typicode.com/invalid-route')

        if(!respone.ok)
        {
            console.log('Something Went Wrong')
        }
        
    } catch (error) {
        console.log(error.message);
    }
    
}

errorHanling()