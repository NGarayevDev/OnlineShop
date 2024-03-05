// let cart = [];

// document.addEventListener("DOMContentLoaded", () => {
//   const addToCartButtons = document.querySelectorAll(".addToCart");
//   addToCartButtons.forEach((button) => {
//     button.addEventListener("click", addToCart);
//   });

//   loadCart();
//   updateCart();
// });

// function addToCart(event) {
//   const productId = event.target.dataset.id;
//   const existingProductIndex = cart.findIndex((item) => item.id === productId);

//   if (existingProductIndex !== -1) {
//     cart[existingProductIndex].quantity++;
//   } else {
//     const productName =
//       event.target.previousElementSibling.previousElementSibling.innerText;
//     const productPrice = event.target.previousElementSibling.innerText;
//     const product = {
//       id: productId,
//       name: productName,
//       price: productPrice,
//       quantity: 1,
//     };
//     cart.push(product);
//   }

//   saveCart();
//   updateCart();
// }

// function saveCart() {
//   localStorage.setItem("cart", JSON.stringify(cart));
// }

// function loadCart() {
//   const savedCart = localStorage.getItem("cart");
//   if (savedCart) {
//     cart = JSON.parse(savedCart);
//   }
// }

// function updateCart() {
//   const cartList = document.getElementById("cartItems");
//   cartList.innerHTML = "";
//   cart.forEach((item) => {
//     const li = document.createElement("li");
//     li.textContent = `${item.name} - ${item.quantity} adet`;
//     const deleteButton = document.createElement("button");
//     deleteButton.textContent = "Sil";
//     deleteButton.addEventListener("click", () => {
//       removeFromCart(item.id);
//     });
//     li.appendChild(deleteButton);
//     cartList.appendChild(li);
//   });
// }

// function removeFromCart(productId) {
//   const index = cart.findIndex((item) => item.id === productId);
//   cart.splice(index, 1);
//   saveCart();
//   updateCart();
// }

// document.getElementById("buyButton").addEventListener("click", () => {
//   const whatsappNumber = "+905510916082";
//   const message = `Sepetinizde ${cart.length} ürün bulunmaktadır. Lütfen satın almak için bu numaradan iletişime geçiniz: ${whatsappNumber}`;
//   window.open(
//     `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
//       message
//     )}`
//   );
// });















let cart = [];

document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".addToCart");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", addToCart);
  });

  loadCart();
  updateCart();
});

function addToCart(event) {
  const productId = event.target.dataset.id;
  const existingProductIndex = cart.findIndex((item) => item.id === productId);

  if (existingProductIndex !== -1) {
    cart[existingProductIndex].quantity++;
  } else {
    const productContainer = event.target.parentElement;
    const productName = productContainer.querySelector("h3").innerText;
    const productPrice = productContainer.querySelector(".price").innerText;
    const productImage = productContainer.querySelector("img").src;
    const product = {
      id: productId,
      name: productName,
      price: productPrice,
      image: productImage,
      quantity: 1,
    };
    cart.push(product);
  }

  saveCart();
  updateCart();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
}

function updateCart() {
  const cartList = document.getElementById("cartItems");
  cartList.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    img.width = "50";
    li.appendChild(img);

    const productName = document.createElement("span");
    productName.textContent = item.name;
    li.appendChild(productName);

    const productPrice = document.createElement("span");
    productPrice.textContent = item.price;
    li.appendChild(productPrice);

    const productQuantity = document.createElement("span");
    productQuantity.textContent = ` - ${item.quantity} adet`;
    li.appendChild(productQuantity);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Sil";
    deleteButton.addEventListener("click", () => {
      removeFromCart(item.id);
    });
    li.appendChild(deleteButton);

    cartList.appendChild(li);
  });
}

function removeFromCart(productId) {
  const index = cart.findIndex((item) => item.id === productId);
  cart.splice(index, 1);
  saveCart();
  updateCart();
}

document.getElementById("buyButton").addEventListener("click", () => {
  const whatsappNumber = "+905510916082";
  const message = `Sepetinizde ${cart.length} ürün bulunmaktadır. Lütfen satın almak için bu numaradan iletişime geçiniz: ${whatsappNumber}`;
  window.open(
    `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
      message
    )}`
  );
});
