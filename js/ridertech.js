document.addEventListener('DOMContentLoaded',load);

function load(){
    loadcontent();
}

function loadcontent(){
    // remove item from cart
    let btnRemove=document.querySelectorAll('.cart-remove');
    btnRemove.forEach((btn)=>{
        btn.addEventListener('click', removeitem);
    });
}

// remove item
function removeitem(){
    this.parentElement.remove();
    console.log("click")
}