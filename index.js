// template_38de9em
// service_owvsxza
// UUOxcBd8pSF8ncrLE

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

let isModalOpen = false;
function toggleModal(){
    if(isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal-open")
    }
    isModalOpen = true;
    document.body.classList += " modal-open";
}