async function updatePost(id) {
    try {
        const updatePostTitle = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
            {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: "Updated Post Title"
                })

            }
        )

        console.log(await updatePostTitle.json())

    } catch (error) {
        console.log(error.message)
    }
}

updatePost(5)
