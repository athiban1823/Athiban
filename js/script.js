let subMenu = document.getElementById("submenu");

function toggleMenu(){
    subMenu.classList.toggle("open");
}


// chatbot

const chatInput=document.querySelector(".chat-input input");
const sendchatBtn=document.querySelector(".chat-input span");
const chatbotToggle=document.querySelector(".chatbot-toggle");

let usermessage;
const handleChat = () =>{
    usermessage=chatInput.value.trim();
    console.log(usermessage);
}

// chatbotToggle.addEventListener('click',()=> document.classList.toggle("show-chatbot"));
sendchatBtn.addEventListener("click",handleChat);

let subMenu1 = document.getElementById("chatbot");
console.log(subMenu1);

function togglemenu(){
    subMenu1.classList.toggle("open3");
}

// carosel

const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
const slidesToShow = 4; // Number of slides to show at a time
const slideWidth = 100 / slidesToShow; // Percentage width for each slide
const totalSlides = slideCount - slidesToShow;
let index = 0;

function updateSlidePosition() {
    const offset = -index * slideWidth;
    slides.style.transform = `translateX(${offset}%)`;
}

document.getElementById('next').addEventListener('click', () => {
    if (index < totalSlides) {
        index++;
    } else {
        index = 0; // Loop back to the start
    }
    updateSlidePosition();
});

document.getElementById('prev').addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = totalSlides; // Loop back to the end
    }
    updateSlidePosition();
});

function autoSlide() {
    if (index < totalSlides) {
        index++;
    } else {
        index = 0; // Loop back to the start
    }
    updateSlidePosition();
}

// Initialize the position
updateSlidePosition();

// Set up automatic sliding every 3 seconds
setInterval(autoSlide, 3000);



  // Get references to DOM elements
  const select1 = document.getElementById('select1');
  const select2 = document.getElementById('select2');
  const select3 = document.getElementById('select3');
  const searchButton = document.getElementById('searchButton');

  // Define options data
  const options = {
        'Shop by bike':{
            'ROYAL ENFIELD':['HIMALAYAN','THUNDERBIRD','HUNTER 350','HIMALAYAN 450','CLASSIC','CONTINENTAL GT'],
            'YAMAHA':['MT 15','R15'],
            'KTM':[],
            'DUKE':[]
        },
      'Riding Gears': {
          'RIDER PROTECTION': ['JACKETS', 'GLOVES','BOOTS',],
           'CASUALS': ['FACE MASK AND BALACLAVA', 'RAIN COATS']
      },
      'LUGGAGE & TOURING': {
          'BAGS AND BACKPACKS': ['BACK PACK', 'SADDLE BAG','TANK BAG'],
           'LUGGAGE ACCESSORIES': ['ALUMINIUM TOP CASES AND PANNIERS','PLASTIC TOP CASE AND PANNIERS', 'PANNIERS'],
           'CARRIERS AND BACKREST':['CARRIERS AND BACK RACK','BACK REST'],
           'TOURING ACCESSORIES':['SADDLE STAY','JERRY CAN AND MOUNTS','BUNGEE CORDS AND NETS']
      },
      'HELMETS AND ACCESSORIES': {
          HELMETS: ['HELMET', 'FULL HELMET'],
          ACCESSORIES: ['GOOGLES', 'HELMET ACCESSORIES'],
          'RIDER TECH':['COMMUNICATION','NAVIGATION']
      },
      countries: {
          usa: ['New York', 'California'],
          japan: ['Tokyo', 'Kyoto']
      }
  };

  // Handle category selection
  select1.addEventListener('change', () => {
      const category = select1.value;
      
      select2.innerHTML = '<option value="">Select Item</option>';
      select3.innerHTML = '<option value="">Select Detail</option>';
      select3.disabled = true;

      if (category) {
          Object.keys(options[category]).forEach(item => {
              select2.innerHTML += `<option value="${item}">${item.charAt(0).toUpperCase() + item.slice(1)}</option>`;
          });
          select2.disabled = false;
      } else {
          select2.disabled = true;
      }
  });

  // Handle item selection
  select2.addEventListener('change', () => {
      const category = select1.value;
      const item = select2.value;

      select3.innerHTML = '<option value="">Select Detail</option>';

      if (item) {
          options[category][item].forEach(detail => {
              select3.innerHTML += `<option value="${detail}">${detail}</option>`;
          });
          select3.disabled = false;
      } else {
          select3.disabled = true;
      }
  });

  // Handle search button click
  searchButton.addEventListener('click', () => {
      const category = select1.value;
      console.log(category);
      const item = select2.value;
      const detail = select3.value;

      if (category && item && detail) {
          // Construct the URL for the detail page
          const detailPage = `${detail.toLowerCase().replace(/\s+/g, '')}.html`;
          const url = `/${detailPage}`;

          // Log the URL for debugging
          console.log('Navigating to:', url);

          // Redirect to the detail page
          window.location.href = url;
      } else {
          alert('Please select all options before searching');
      }
  });


// main carosel
  document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel1-images img');
    const dots = document.querySelectorAll('.carousel1-dots .dot');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;
    const totalImages = images.length;
    const interval = 3000; // 3 seconds

    function showSlide(index) {
        if (index >= totalImages) index = 0;
        if (index < 0) index = totalImages - 1;

        document.querySelector('.carousel1-images').style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        currentIndex = index;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            showSlide(parseInt(dot.getAttribute('data-slide')));
        });
    });

    setInterval(nextSlide, interval);
    
    showSlide(currentIndex); // Initialize the carousel
});



document.addEventListener('DOMContentLoaded', () => {
    // Get the product details from query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Sample product data (replace with actual data or fetch from server)
    const products = {
        '1': {
            image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTV_vbCsIv734rrxAtqK8Izf_bbkUmlERYdFI6rHtcQGLaaVri0trrA_XiwP9ck_jcQX51WMi-tx-LON0oPqfbrOewYdcdp-wMGpH-_0x1c&usqp=CAE5',
            name: 'Raiden DRL Indicator Condinantal GT',
            price: '₹199'
        },
        // Add more products here
    };

    // Populate the page with product details
    if (products[productId]) {
        const product = products[productId];
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = product.price;
    } else {
        // Handle case where product is not found
        document.querySelector('main').innerHTML = '<p>Product not found.</p>';
    }
});
