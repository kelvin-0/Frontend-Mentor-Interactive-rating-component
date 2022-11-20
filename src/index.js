const reviews = document.getElementById("reviews")
const buttons = reviews.getElementsByTagName("button")
let star = 0;
for(let button of buttons){
    button.addEventListener("click", ()=>{
        star = button.innerText
    })
}

const renderResult = ()=>{
    const card = document.getElementById("card")
    const thankYouElement = `<h1 class="text-center text-2xl text-white font-bold order-2 mt-6">Thank You</h1>
    <p class="text-center text-sm text-lightGrey order-2 mt-3">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    <img width='128' height='85' src='../images/illustration-thank-you.svg' alt='thank you' class='w-32 mx-auto block max-w-full'>
    <span class="text-primaryOrange rounded-full w-fit text-sm px-5 py-1 mx-auto mt-6 bg-lightDarkBlue">You selected ${star} out of 5</span>`
    card.innerHTML = thankYouElement    
}
const submitButton = document.getElementById("submit")
submitButton.addEventListener("click", ()=>{
    if(!star){
        alert("choose your reviews!!")
        return
    }
    renderResult()
})