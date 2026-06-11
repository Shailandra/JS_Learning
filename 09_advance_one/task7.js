async function deletePost(id) {
    try {
        const deleteId = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
            {
                method: 'DELETE'
            }
        )

        if (await deleteId.ok) {
            console.log("Post deleted successfully")

        }


    } catch (error) {
        console.log(error.message)
    }

}

deletePost(10)