const createButton = document.querySelector('#createPatratBtn')
const changeColor = document.querySelector('#schimbaCuloare')
let patrat = document.createElement('div')

createButton.addEventListener('click', () =>{
    document.body.appendChild(patrat)
    patrat.style.width = '100px'
    patrat.style.height = '100px'
})
changeColor.addEventListener('click', () => {
    patrat.style.backgroundColor = getRandomColor()
})



const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}