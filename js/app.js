
const div = document.createElement('div');
div.classList.add('blog');
const h2 = document.createElement('h2');
h2.innerText = 'hello ja! 5';
const p = document.createElement('p');
p.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dicta perferendis, excepturi cum neque porro harum fugiat, libero dolorum facilis possimus aliquam? Assumenda, nulla quidem quia omnis ea vel reprehenderit!';
div.appendChild(h2);
div.appendChild(p);

const articale = document.getElementById('article');
articale.appendChild(div);

const blogs = document.getElementsByClassName('blog');
for(const blog of blogs){
    blog.style.border = '2px solid red'
    blog.style.margin = '5px';
    blog.style.borderRadius = '5px';
    blog.style.padding = '10px';
}

const  title = document.getElementById('title1');
title.setAttribute('title', 'yes sob thik ache');