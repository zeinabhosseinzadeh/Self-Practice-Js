"use strict"
document.getElementById("fetchBtn").addEventListener("click", async () => {
    const postId = document.getElementById("postIdInput").value.trim();
    const postDiv = document.getElementById("post");
    const commentsDiv = document.getElementById("comments");
  
    postDiv.innerHTML = '';
    commentsDiv.innerHTML = '';
  
    if (!postId) {
      alert("Enter post Number");
      return;
    }
  
    try {
      const [postRes, commentsRes] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`),
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      ]);
  
      if (!postRes.ok) throw new Error("Post Not Found!!!!!");
  
      const post = await postRes.json();
      const comments = await commentsRes.json();
  
      postDiv.innerHTML = 
        `<h2>${post.title}</h2>
        <p>${post.body}</p>
        <hr>`
      ;
  
      if (comments.length === 0) {
        commentsDiv.innerHTML = `"<p>This Post Has No Comments!</p>"`;
      } else {
        commentsDiv.innerHTML = `<h3>Comments:</h3>`;
        comments.forEach(c => {
          commentsDiv.innerHTML += 
            `<div class="comment">
              <strong>${c.name}</strong> (${c.email})
              <p>${c.body}</p>
            </div>`
          ;
        });
      }
  
    } catch (err) {
      postDiv.innerHTML = `<p style="color: red;">ERROR!: ${err.message}</p>`;
    }
  });