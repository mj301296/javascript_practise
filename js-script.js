// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const para = document.createElement('p');
para.classList.add('para')
para.textContent = 'Hey! I\'m red';
para.setAttribute('style', 'color: red; background: white;');   
container.appendChild(para);

const mod = document.createElement('div');
mod.classList.add('mod');
mod.setAttribute('style', 'border-color: black; background: pink;');   

const imp_text = document.createElement('h1');
imp_text.textContent = 'I\'m in a div';
mod.appendChild(imp_text);

const para2 = document.createElement('p');
para2.textContent = 'Mee too';


mod.appendChild(para2);
container.appendChild(mod);



