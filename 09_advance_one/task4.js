async function getCompletedCount()
{
    let count =0;
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        await data.map(e=>{
            if(e.completed === true)
            {
                count++
            }

        })
        console.log('Completed Todos:',count)
    } catch (error) {
        console.log(error.message)
    }
}

getCompletedCount()