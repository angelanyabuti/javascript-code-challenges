//events
const btn = document.querySelector('.btn');
btn.addEventListener('mouseout',(e) => {
    e.preventDefault()
    document.querySelector('#my-form').style.background='#ccc'
})
