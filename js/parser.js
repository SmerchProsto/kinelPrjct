const productParagraphs = document.querySelectorAll(".product-img-description");
const buyBtn = document.querySelectorAll(".product-buy-btn")
const arr = Array.from(productParagraphs)

arr.map((par, index) => {
    buyBtn[index].href = "https://kasam.ru/?product_cat=&s=" + par.innerHTML.split(" ")[0] + "&post_type=product";
});