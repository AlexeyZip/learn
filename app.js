// window.alert('1');
// window.confirm('whats you name')

const heading = document.getElementById("hi");
// const heading2 = document.getElementsByTagName("h2")[0]
// const heading2 = document.getElementsByClassName('h2-class')
// const heading2 = document.querySelector('.h2-class')
// const heading2 = document.querySelector('#sub-hello')
const heading2 = document.querySelector('h2')
console.dir(heading2);

// const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')
console.log(h2List);
const heading3 = h2List[h2List.length - 1]
// console.log(heading3);


// setTimeout(() => {
//   heading.textContent = "Changed from JS";
//   heading.style.color = "orange";
//   heading.style.textAlign = "center";
//   heading.style.backgroundColor = "purple";
//   heading.style.padding = "2rem";
// }, 2000);

setTimeout(() => {
    addStylesTo(heading, 'JavaScript', 'white', 'upperCase')
}, 700)

setTimeout(() => {
    addStylesTo(heading2, 'practice', 'white')
}, 900)

const link = heading3.querySelector('a')
link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('dsf', event);
})

setTimeout(() => {
    addStylesTo(link, 'and everything work out', 'white', 'upperCase')
}, 1100)

function addStylesTo(node, text, color = 'red', font = 'initial') {
  node.textContent = text;
  node.style.color = color;
  node.style.textAlign = "center";
  node.style.backgroundColor = "purple";
  node.style.padding = "2rem";
  node.style.display = "block";
  node.style.width = "100%";
  if (font) {
      node.style.textTransform = font
  }
  node.style.textTransform = font;
}

heading2.onclick = () => {
    if(heading2.style.color === 'white') {
        heading2.style.color = 'purple'
        heading2.style.backgroundColor = 'black'
        heading2.style.textTransform = 'upperCase'
    } else {
        heading2.style.color = 'white'
        heading2.style.backgroundColor = 'purple'
        
    }
}


heading.addEventListener('click', () => {
    if( heading.style.color === 'white') {
        heading.style.color = 'purple'
        heading.style.backgroundColor = 'black'
        heading.style.textTransform = 'upperCase'
    } else {
        heading.style.color = 'white'
        heading.style.backgroundColor = 'purple'
        
    }
})
