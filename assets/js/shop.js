var productList = [
  {
    imgSrc: "assets/img/katnis1.jpg",
    title: "Katniss Everdeen",
    description: "This picture has been drawn with colored pencils.",
    price: 15,
  },
  {
    imgSrc: "assets/img/luana1.jpg",
    title: "Product 1 ",
    description: "This picture has been drawn with colored pencils.",
    price: 10,
  },
  {
    imgSrc: "assets/img/rihanna1.jpg",
    title: "Rihanna",
    description: "This picture has been drawn with colored pencils.",
    price: 12,
  },
  {
    imgSrc: "assets/img/murat1.jpg",
    title: "Product 2",
    description: "This picture has been drawn with colored pencils.",
    price: 10,
  },
  {
    imgSrc: "assets/img/scot1.jpg",
    title: "Teen Wolf ",
    description: "This picture has been drawn with colored pencils.",
    price: 10,
  },
  {
    imgSrc: "assets/img/styles1.jpg",
    title: "Teen Wolf Stiles",
    description: "This picture has been drawn with colored pencils.",
    price: 10,
  },
  {
    imgSrc: "assets/img/milena1.jpg",
    title: "Product 3",
    description: "This picture has been drawn with colored pencils.",
    price: 10,
  },
];

var product = document.getElementsByClassName("productContainer")[0];
var container = document.getElementsByClassName("container")[0];

for (var i = 0; i < productList.length; i++) {
  let productObject = productList[i];
  var cloneProduct = product.cloneNode(true);
  let image = cloneProduct.getElementsByClassName("productImage")[0];
  image.src = productObject.imgSrc;
  let title = cloneProduct.getElementsByClassName("productH3")[0];
  title.innerText = productObject.title;
  let description = cloneProduct.getElementsByClassName("productText")[0];
  description.innerText = productObject.description;
  let price = cloneProduct.getElementsByClassName("productPrice")[0];
  price.innerText = "£" + productObject.price.toFixed(2);
  container.appendChild(cloneProduct);
}

function clickDetail() {
  window.location.href = "productDetail.html";
}

/*function onMouseOver(x) {
  x.src = "assets/img/lillyColinsDrawing3.jpg";
}

function onMouseLeave(x) {
  x.src = "assets/img/lillyColinsDrawing1.jpg";
}*/
