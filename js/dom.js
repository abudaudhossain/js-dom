// console.log(document);
// console.log(document.body);

const blogTitle = document.getElementsByTagName('h3');
console.log(blogTitle);
for(let h3 of blogTitle){
    console.log(h3.innerHTML);
}
const blogsDetails = document.getElementsByTagName('p') ;

for(let p of blogsDetails){
    console.log(p.innerText);
}