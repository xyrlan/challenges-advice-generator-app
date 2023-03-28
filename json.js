const resDiv = document.querySelector('#advice');
const resId = document.querySelector('#id-advice');
const resBtn = document.querySelector('#botao');

resBtn.addEventListener('click', () => {
    getAdvice();
})

window.onload = () => {
    getAdvice();
}

function getAdvice() {

fetch('https://api.adviceslip.com/advice').then(response =>{
    return response.json();
}).then(adviceData => {
    const Adviceobj = adviceData.slip
    resDiv.innerHTML = `"${Adviceobj.advice}"`;
    resId.innerHTML = `#${Adviceobj.id}`;
}).catch(error => {
    console.log(error);
});
}
