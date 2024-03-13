const wrapper = document.querySelector(".sliderWrapper");
const menuItem = document.querySelectorAll(".menuItem");
// console.log(menuItem);
const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "/media/air.png",
      },
      {
        code: "darkblue",
        img: "/media/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air jordan",
    price: 122,
    colors: [
      {
        code: "lightgray",
        img: "/media/jordan2.png",
      },
      {
        code: "green",
        img: "/media/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "/media/blazer.png",
      },
      {
        code: "green",
        img: "/media/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "/media/crater.png",
      },
      {
        code: "lightgray",
        img: "/media/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "/media/hippie.png",
      },
      {
        code: "black",
        img: "/media/hippie.png",
      },
    ],
  },
];
console.log(products);

let choosenProduct = products[0];
console.log(choosenProduct);

const currentProductimg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSize = document.querySelectorAll(".size");

menuItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen products
    choosenProduct = products[index];

    //change text of current product
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductimg.src = choosenProduct.colors[0].img
// assing new color
    currentProductColors.forEach((color,index)=>{
      color.style.backgroundColor = choosenProduct.colors[index].code;
    })
  });
});



currentProductColors.forEach((color,index)=>{
  color.addEventListener("click", ()=>{
    currentProductimg.src = choosenProduct.colors[index].img
  })
})
