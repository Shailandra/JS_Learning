/* async function getUserEmail(name){

    try {

        const getAllUser = await fetch('https://jsonplaceholder.typicode.com/users');
        const response = await getAllUser.json();
        response.map(data=>{
            if(data.username == name)
            {
                console.log('Email:',data.email)
            }
        })
        
    } catch (error) {

        console.log(error.message)
        
    }

}

getUserEmail('Bret') */


//Method 2

fetch('https://jsonplaceholder.typicode.com/users')
.then(Response=>Response.json())
.then(data=>data.map(e=>{
    if(e.username =='Bret')
    {
        console.log('Email:',e.email)
    }
}))
.catch(error=>console.log(error.message)
)