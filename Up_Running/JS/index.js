const container=document.querySelector('.blogs');
window.addEventListener('DOMcontentloaded',(e)=>renderPosts);

const renderPosts=async ()=>{
let uri='http//localhost:3000/post';


const res=await fetch(uri);
const posts=await res.json();
console.log(posts);
let template='';
posts.forEach(post=> {
    template +=`
    <div class="post">
    <h2>${post.title}</h2>
    <p><small>${post.likes}Likes</small></p>
    <p>${post.body.slice(200)}</p>
    <a href="details.html">read more...</a>
    </div>`;
});
}