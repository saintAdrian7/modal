const openBtn = document.getElementById("open-btn")
const closeBtn = document.getElementById("close-btn")
const modalContainer =document.getElementById("modal-container")


openBtn.addEventListener('click',function(){
    modalContainer.style.display = 'block'
    
})

closeBtn.addEventListener('click',function(){
    modalContainer.style.display = 'none'
})

window.addEventListener('click',function(event) {
    if(event.target === modalContainer){
        modalContainer.style.display = 'none'  
    }
})