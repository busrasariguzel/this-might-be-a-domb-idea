const paragraph = document.querySelector('p');
paragraph.style.color = 'lightBlue';
const heading = document.querySelector('h1');
heading.style.fontSize = '10px';
paragraph.innerText = 'Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.'
const item13 = document.querySelector('#item-13')
item13.style.opacity = '0.5';

const item3 = document.querySelector('#item-3');
item3.innerText = 'I say, "Hi!"'

const image = document.querySelector('img');
image.src = 'http://www.tioxic.com/wp-content/uploads/trex_4.jpg'

image.style.height = '300px';

const image2 = document.createElement('img');
image2.src = 'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/03/Russian-Blue_01.jpg'

const div = document.querySelector('div');
div.appendChild(image2);
image2.style.height= '300px';

const item16 = document.createElement('li');
item16.class = 'item';
item16.id = 'item-16';
item16.innerText = "I won't be fooled again";
const list = document.querySelector('ul')
list.appendChild(item16);

// const newItem = document.createElement('li');
// newItem.class = 'item';
// newItem.id = 'item-16';
// newItem.innerText = "I won't be fooled again.";
// const list = document.querySelector('ul');
// list.appendChild(newItem);











