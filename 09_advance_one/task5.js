async function createPost() {

    const respone = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({

            title: "Shailandra Learning Fetch",
            body: "Practice makes perfect",
            userId: 1
        }
        )

    }
    )
    console.log(await respone.json())

    const getData = await fetch('https://jsonplaceholder.typicode.com/posts/101')
    console.log(await getData.json())

}

createPost()