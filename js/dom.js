// console.log(document);
// console.log(document.body);

const blogTitle = document.getElementsByTagName('h3');
// console.log(blogTitle);
for (let h3 of blogTitle) {
    // console.log(h3.innerHTML);
}

const blogsDetails = document.getElementsByTagName('p');

for (let p of blogsDetails) {
    // console.log(p.innerText);
}


// explore getElementById 
const firstBlog = document.getElementById('first-blog');
// console.log(firstBlog);
firstBlog.style.backgroundColor = 'coral';
// fb = firstBlog
const fbsytle = firstBlog.style;
fbsytle.color = 'white';
fbsytle.padding = '10px 20px';
fbsytle.borderRadius = '10px';

// explore getElementsByClass 
const blogs = document.getElementsByClassName('blog');
blogs[1].children[0].innerText = 'Update Title blog 2'
blogs[1].children[0].style.backgroundColor = 'blue';
let i = 0;
for (let blog of blogs) {
    blog.style.backgroundColor = 'coral';
    blog.style.padding = '10px 20px';
    blog.style.color = 'white';
    blog.style.borderRadius = '10px';
    blog.style.marginTop = '10px';
    if(i == 3){
        blog.children[1].innerHTML = `<h5>This chane</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi blanditiis sapiente sequi asperiores, nam voluptas cum ex quasi, numquam explicabo molestias minus odio minima, enim itaque iusto! Magni, architecto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis labore suscipit sit molestiae ex quae eius nisi expedita, quaerat error explicabo placeat adipisci ipsam optio perferendis quo voluptates. Optio, asperiores.</p>`
    //    console.log( blog.innerText);
    }
    i++;
};


// explore querySelectorAll and querySelector
const blogTitles = document.querySelectorAll('.blog-title');
// console.log(blogTitles);
for (let bTitle of blogTitles){
    /* console.log(bTitle.innerText); */
    bTitle.style.textAlign = 'center';
}

// change text inter tag 
const firstBlogTitle = blogTitles[0];
firstBlogTitle.setAttribute('title','This is first Title in this blogs');
// console.log(firstBlogTitle)

const li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[0].parentNode.parentNode.parentNode);

// add tha element 

let addlist = document.createElement('li');
addlist.innerText = 'blog-5';
li[0].parentNode.appendChild(addlist);

const Li = document.querySelector('li');
addlist = document.createElement('li');
addlist.innerText = 'blog-6';
// console.log(Li.parentNode);
Li.parentNode.appendChild(addlist);

const ul = Li.parentNode;
let removeItem = ul.children[0];
removeItem.remove();
console.log(removeItem);
