var cartItems = {
    cart: []
};

var updateCart = function() {


    $(".cart-list").empty();
    var source = $('#store-template').html();
    var template = Handlebars.compile(source);
    var newHTML = template(cartItems);
    $('.cart-list').append(newHTML);
    var total = 0;

    for (var i = 0; i < cartItems.cart.length; i++) {
        total = total + cartItems.cart[i].price;
        //console.log(total);

    };
    $('.total').html(total);
}


var addItem = function(product) {
    //console.log(product);
    cartItems.cart.push(product);
    //console.log(cartItems.cart);
}

var clearCart = function() {
    $('.cart-list').empty();
    cartItems.cart = [];
    $('.total').html(0);

    console.log(cartItems.cart);
}

$('.view-cart').on('click', function() {
    $(".shopping-cart").toggle();

});

$('.add-to-cart').on('click', function() {
    var product = $(this).closest(".card").data();
    //console.log(product);
    $(".shopping-cart").show();
    addItem(product);
    updateCart();
});

$('.clear-cart').on('click', function() {
    clearCart();
});

updateCart();
