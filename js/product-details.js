 // Function to get URL parameters
 function getQueryParams() {
    const queryParams = new URLSearchParams(window.location.search);
    return {
        id: queryParams.get('id')
    };
}

// Fetch product details based on the ID from the URL
function loadProductDetails() {
    const params = getQueryParams();
    const productId = params.id;

    // Normally, you would fetch this data from an API or server

    const products ={
        '1': {
            name: 'Raiden DRL Indicator Condinantal GT',
            price: '₹199',
            image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTV_vbCsIv734rrxAtqK8Izf_bbkUmlERYdFI6rHtcQGLaaVri0trrA_XiwP9ck_jcQX51WMi-tx-LON0oPqfbrOewYdcdp-wMGpH-_0x1c&usqp=CAE5',
            description: 'This high-quality Condinantal GT Indicator offers enhanced visibility and durability. Perfect for upgrading your vehicle\'s indicators with a stylish and functional design.'
        },
        '2': {
            name: 'Condinantal GT Indicator Savage to mirror v 2.0',
            price: '₹1,299',
            image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR1bn7U9_KtG6hgLLGtNT24T1-psTPRj25kBHPcniQMsDJJKTkr2pOEY7FVaaB_wpFHiwX2o8rsyWkh2cNmiwGL9CO1T78TRXmWfRLAswZuJP1NQMW0ZbH8DA&usqp=CAE',
            description: 'A superior indicator for Condinantal GT with an upgraded design. Ensures better visibility and style.'
        },
        '3':{
            name:'Condinantal GT Inspired Universal Mirror',
            price:'₹899',
            image:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSAfYOzeBNVZTtU81l0pvJKqauQ-QtYc_47pQbpYyiMSX4sODzFlopy0Em6LQfeWP1ENwt-6Au9LlPXotGbdeTWjWszaENCnnIqz-ERjVA1&usqp=CAE',
            description:'A superior indicator for Condinantal GT with an upgraded design. Ensures better visibility and style.'
        },
        '4':{
            name:'Exclusive Invisible Wing GT Mirror Diamond',
            price:'₹499',
            image:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSVPWmuQMfLEtZAEsOc4vewuc6pjejKRvsBPE7TZOLUKKl7y4-_oE7hNFf7a5oFePq3N-kCcrsWxYieLqivof9oeMhD5nP6vECmLenmqG5bD1Im5tojGCdXvw&usqp=CAE',
            description:'A superior indicator for Condinantal GT with an upgraded design. Ensures better visibility and style.'
        },
        '5':{
            name:' Wing Fin Rear view Mirror For Condinantal GT',
            price:'8,500',
            image:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQcixL5NDofpjDdAFpNPucssB5g0iZoMqKzkSH0y3blFN5iUD1DpWCWhO5nVWX-agkAybzAm8qMGrS4W5ZAy6NK2q2gDE5eU1xaHOTAzRJsiLD2qFExOlFsJw&usqp=CAE',
            description:'A superior indicator for Condinantal GT with an upgraded design. Ensures better visibility and style.'
        },
        '6':{
            name:' CBR 2 Side Indicator Mirror-Black',
            price:'₹1,020',
            image:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRE5aqv-1i1QdjgLoirwbQdPTCxEgqvEQqgft_wji8DLyL7DGXfQtA5wKKQEGO-VEv3c-j-OOqd_f2EA6ngWwiFY4qlE6nMhrqQlHNHIfuk5mUVqomsGcRneQ&usqp=CAE',
            description:'A superior indicator for Condinantal GT with an upgraded design. Ensures better visibility and style.'
        },


        'tech1':{
            name:' LCB Fort Knox Series TC 45L Aluminium With Backrest Pad',
            price:'₹7,000',
            image:'https://bandidospitstop.com/cdn/shop/files/BLU11970BSDDPHELMETBLUETOOTHA1301.jpg?v=1712252114&width=1125',
            description:''
        },

        
        'jack1':{
            name:' Motowear Freedom Riding Jacket',
            price:'₹4,400',
            image:'https://bandidospitstop.com/cdn/shop/products/2_84.jpg?v=1680854293&width=1125',
            description:''
        },
        'jack2':{
            name:' Motowear Freedom Riding Jacket - Black Red',
            price:'₹5,600',
            image:'https://bandidospitstop.com/cdn/shop/products/jacket.png?v=1680852469&width=1125',
            description:''
        },
        // Add more products as needed
    };


    

    const product = products[productId];
    if (product) {
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = product.price;
        document.getElementById('product-description').textContent = product.description;
    } else {
        document.getElementById('product-name').textContent = 'Product Not Found';
        document.getElementById('product-price').textContent = '';
        document.getElementById('product-description').textContent = 'Sorry, this product does not exist.';
    }
}



// Quantity manipulation functions
document.getElementById('increase-quantity').addEventListener('click', function() {
    let quantity = parseInt(document.getElementById('quantity').value);
    document.getElementById('quantity').value = quantity + 1;
});

document.getElementById('decrease-quantity').addEventListener('click', function() {
    let quantity = parseInt(document.getElementById('quantity').value);
    if (quantity > 1) {
        document.getElementById('quantity').value = quantity - 1;
    }
});

// Add to cart functionality
document.querySelector('.add-to-cart').addEventListener('click', function() {
    const quantity = document.getElementById('quantity').value;
    alert(`Added ${quantity} items to the cart.`);
    // Implement actual add to cart logic here
});

// Add to wishlist functionality
document.querySelector('.add-to-wishlist').addEventListener('click', function() {
    alert('Added to wishlist.');
    // Implement actual add to wishlist logic here
});

// Buy it now functionality
document.querySelector('.buy-now').addEventListener('click', function() {
    const quantity = document.getElementById('quantity').value;
    alert(`Buying ${quantity} items now.`);
    // Implement actual buy now logic here
});

// Load product details when the page loads
window.onload = loadProductDetails;


// DESCRIPTION
document.querySelectorAll('.item-header').forEach(function(header) {
header.addEventListener('click', function() {
    var targetId = this.getAttribute('data-target');
    var descriptionElement = document.getElementById(targetId);

    // Toggle the visibility of the description
    if (descriptionElement.classList.contains('active')) {
        descriptionElement.classList.remove('active');
    } else {
        // Optionally, hide other descriptions if needed
        document.querySelectorAll('.description-container').forEach(function(desc) {
            desc.classList.remove('active');
        });
        descriptionElement.classList.add('active');
    }
});
});



