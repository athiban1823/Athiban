let subMenu = document.getElementById("submenu");
let subMenu2 = document.getElementById("submenu2");

function toggleMenu(){
    subMenu.classList.toggle("open");
}
function togglemenu(){
    subMenu2.classList.toggle("open2");
}

const buttons=document.querySelectorAll('.btn');
const boxes=document.querySelectorAll('.mini');
const searchBox=document.querySelector('#search');


// search
searchBox.addEventListener('keyup',(e)=>{
    searchText=e.target.value.toLowerCase().trim();
    boxes.forEach((box)=>{
        const data=box.dataset.iteam;
        if(data.includes(searchText)){
            box.style.display='block';
        }
        else{
            box.style.display='none';
        }
    });
    buttons.forEach((button)=>{
        button.classList.remove('btn-clicked');
    });
    buttons[0].classList.add('btn-clicked');
});

// buttons
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        e.preventDefault();
        setActiveBtn(e);
        const btnFilter=e.target.dataset.filter;

        boxes.forEach((box)=>{
            if(btnFilter=='all'){
                box.style.display='block';
            }
            else{
                const boxFilter=box.dataset.iteam;
                if(boxFilter==btnFilter){
                    box.style.display='block';
                }
                else{
                    box.style.display='none';
                }
            }
        });
    });
});

function setActiveBtn(e){ 
    buttons.forEach((button)=>{
        button.classList.remove('btn-clicked');
    });
        e.target.classList.add('btn-clicked');
}

// cart open close
const btncart=document.querySelector('#cart-icon');
const cart=document.querySelector('.cart');
const btnclose=document.querySelector('#cart-close');


btncart.addEventListener('click',()=>{
    cart.classList.toggle('cart-active');
});
btnclose.addEventListener('click',()=>{
    cart.classList.remove('cart-active');
});


// cart remove
document.addEventListener('DOMContentLoaded',load);

function load(){
    loadcontent();
}

function loadcontent(){
    let btnRemove=document.querySelectorAll('.delete');
   btnRemove.forEach((btn)=>{
        btn.addEventListener('click',removeitem);
   });


// prod item change event
    let qtyelement=document.querySelectorAll('.qty');
   qtyelement.forEach((input)=>{
        input.addEventListener('click',Changeqty);
   });

   updateTotal();
}


// product cart
let cartBtns=document.querySelectorAll('.add-cart');
    cartBtns.forEach((btn)=>{
        btn.addEventListener('click',addCart);
    });



//remove item
function removeitem(){
    this.parentElement.remove();
    loadcontent();
    }


// change qty
function Changeqty(){
    if(isNaN(this.value) || this.value<1){
        this.value=1;
    }
    loadcontent();
}

let iteamList=[];
// add cart
function addCart(){
    let acc=this.parentElement;
    let title=acc.querySelector('.acc-title').innerHTML;
    let price=acc.querySelector('.price').innerHTML;
    let imgsrc=acc.querySelector('.image').src;
    let newpro={price,title,imgsrc}

    // check product already exit in cart
    if(iteamList.find((el)=>el.title==newpro.title)){
        alert("Pro");
        return;
    }else{
        iteamList.push(newpro);
    }


    let newproduct=CreatcartProduct(title,price,imgsrc);
    let element=document.createElement('div');
    element.innerHTML=newproduct;
    let cartBasket=document.querySelector('.cart-cont');
    cartBasket.append(element);
    loadcontent();
}


function CreatcartProduct(title,price,imgsrc){
    return `
   <div class="cart-mini" data-iteam="half-helmet">
        <div class="cart-image">
            <img class="images" src="${imgsrc}" alt="">
        </div>
        <div class="cart-content">
            <h4 class="acc-title">
                ${title}</h4>
                <p class="price">${price}</p>
                <input type="number" class="qty" value="1">
        </div>
        <div class="delete"><i class="fa-solid fa-trash"></i></div>
    </div> 
    `
}

function updateTotal(){
    const cartItems=document.querySelectorAll('.cart-mini');
    console.log(cartItems);
    const totalValue=document.querySelector('.total-price');

    let total=0;
     let totalf;

    cartItems.forEach(product =>{
        console.log(product);

        let priceelement=product.querySelector('.price');
        let price=priceelement.innerHTML.replace(/,/g ,'');
        console.log(price);
        let fprice=price.replace('₹','');
        console.log(fprice);

        let qtys=product.querySelector('.qty').value;
        total+=(fprice*qtys);
        product.querySelector('.price').innerText="₹"+fprice*qtys;

    });
    totalf=total.toLocaleString();
    console.log(totalf);
    totalValue.innerHTML="₹ "+totalf;


    // Add product count

    const cartcount=document.querySelector('.cart-count');
     let count=iteamList.length;
     cartcount.innerHTML=count;
}





document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productElement = button.closest('.mini');
            const productId = productElement.getAttribute('data-id');
            const productName = productElement.getAttribute('data-name');
            const productPrice = productElement.getAttribute('data-price');

            // Get cart from localStorage or initialize an empty array
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Add product to cart
            cart.push({ id: productId, name: productName, price: productPrice });
            localStorage.setItem('cart', JSON.stringify(cart));

            alert('Product added to cart!');
        });
    });
});
