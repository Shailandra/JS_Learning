async function getAllPost()
{
    try {

        const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await posts.json()
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
             if(element.userId === 1)
        {
            console.log(element.title)
        }
            
        }
               
    } catch (error) {
        console.log(e.message)
    }
}

getAllPost()


