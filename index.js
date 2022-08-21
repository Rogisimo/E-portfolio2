// template_38de9em
// service_owvsxza
// UUOxcBd8pSF8ncrLE

let contrastToggle = false;
let isModalOpen = false;
const scaleFactor = 1 / 20

function moveBackground(event){
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for(let i = 0; i < shapes.length; i ++){
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function toggleContrast(){
    contrastToggle = !contrastToggle;
    if(contrastToggle){
        document.body.classList += " dark-theme"
    }
    else{
        document.body.classList.remove("dark-theme")
    }
}

function contact(event){
    event.preventDefault();
    const loading = document.querySelector(".modal_overlay_loading")
    const success = document.querySelector(".modal_overlay_success")
    loading.classList += " modal_overlay_visible" //space needed
    emailjs.sendForm(
        "service_owvsxza",
        "template_38de9em",
        event.target,
        "UUOxcBd8pSF8ncrLE"
    ).then(() => {
        loading.classList.remove("modal_overlay_visible");
        success.classList += " modal_overlay_visible"
    }).catch(() => {
        loading.classList.remove("modal_overlay_visible")
        alert("The email service ir temporarily unavailable. Please contact me directly on robertasmurnikovas1@gmail.com")
    })

    setTimeout(() => {
        console.log("It worked ")
    }, 1000);
}

function toggleModal(){
    if(isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal-open")
    }
    isModalOpen = true;
    document.body.classList += " modal-open";
}