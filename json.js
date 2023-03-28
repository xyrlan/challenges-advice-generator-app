const url = "https://api.adviceslip.com/advice"

const advices = document.getElementById('advice');
const idAdvice = document.getElementById('id-advice');
json => {
    fetch(url).then((response) =>{
        response.json().then((slip) => {
            


                fetch(`${url}/${advice}`)
                fetch(`${url}/${id}`)

            })


        })
}



// async function getAll(advice) {
    
//     const response = await fetch(url);
//     console.log(response);
//     const data = await response.json();
//     data

    
    
    
    
    
    
    // const response = await fetch(url);
    // console.log(response);

    // const data = await response.json();

    // console.log(data);

    // // data.map((content) => { 

    //     const div = document.createElement("p");
    //     const id = document.createElement("a");

    //     advice.innerHTML = advice;
    //     idAdvice.innerHTML = id;

        

      

// getAll();
// const myPromise = new Promise((resolve) => {



// let divadvice = document.querySelector("#advice")
// let divid = document.querySelector("#id-advice")

// const botao = document.querySelector(".button")
// const response = fetch(url);

// // botao.forEach((botao, indice) => {
    
    
        
//         response.json().then((dados) => {
//             dados.slip.map((abc) => {
//                 return abc.advice()


            
//             })


//         })
        
    
    
 


