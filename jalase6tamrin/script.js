'use strict'
const button = document.getElementById("get-Post");
const input = document.getElementById("inp-post");
const result = document.getElementById("result");

function fetchPost() {
    const postId = input.value.trim();

    if (!postId) {
        result.innerHTML = `<p class="error">please enter post ID</p>`;
        return;
    }
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("post not found");
            }
            return response.json();
        })
        .then(post => {
            result.innerHTML =
                `<div class="post">
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        </div>`;
        })
        .catch(error => {
            result.innerHTML = `<p class="error">${error.message}</p>`;
        });
}

document.addEventListener("click", fetchPost);

document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        fetchPost();
    }
});