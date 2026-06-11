//Method1

async function getAllUser()
{
    try {
        const getUser = await fetch('https://jsonplaceholder.typicode.com/users')

        const data =await getUser.json()

        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            console.log(element.name)
            
        }

        
    } catch (error) {
        
        console.log(error.message)
    }
}

getAllUser()


//Method 2

/* fetch('https://jsonplaceholder.typicode.com/users')
.then(Response=>Response.json())
.then(data=>data.map(e=>console.log(e.name)))
.catch(error=>console.log(error.message)
) */