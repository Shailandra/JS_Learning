/* Create an input box.

When the user enters a post ID and clicks a button:

<input type="number">
<button>Search</button>

Fetch:

https://jsonplaceholder.typicode.com/posts/{id}

Display the title on the page. */

//   <script>
//         document.getElementById("searchBtn").addEventListener("click", () => {
//             const id = document.getElementById("postId").value;

//             fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//                 .then(response => {
//                     if (!response.ok) {
//                         throw new Error("Post not found");
//                     }
//                     return response.json();
//                 })
//                 .then(data => {
//                     document.getElementById("result").textContent = data.title;
//                 })
//                 .catch(error => {
//                     document.getElementById("result").textContent = error.message;
//                 });
//         });
//     </script>

document.getElementById('searchBtn').addEventListener('click', () => {
    let id = document.getElementById("postId").textContent();
    id = parseInt(id);

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json)
        .then(data => {
            document.getElementById('result').textContent = data.title;
        }).catch(error => {
            document.getElementById("result").textContent = error.message;
        })
}
)