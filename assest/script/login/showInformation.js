const btndecrease = document.querySelector('#decrease');
const btnincrease = document.querySelector('#increase');
const quantityinput = document.querySelector('#quantity');

btndecrease.addEventListener('click', () => {
    let quantity = parseInt(quantityinput.value); // Chuyển đổi giá trị từ chuỗi thành số nguyên
    if (quantity > 1) { // Kiểm tra nếu số lượng lớn hơn 1
        quantity--; // Giảm số lượng
    }
    quantityinput.value = quantity; // Cập nhật lại giá trị cho ô input
});
btnincrease.addEventListener('click', () => {
    let quantity = parseInt(quantityinput.value);
    if (quantity < 100) {
        quantity++;
    }
    quantityinput.value = quantity;
});
quantityinput.addEventListener('input', () => {
    let quantity = parseInt(quantityinput.value) || 1;
    if (quantity > 100) {
        quantity = 100;
    } else if (quantity < 1) {
        quantity = 1;
    }
    quantityinput.value = quantity;
});

const btnaddtocart = document.querySelector('#btn--addcart');
const cartnumber = document.querySelector('.cart__number');

btnaddtocart.addEventListener('click', () => {
    let quantity = parseInt(quantityinput.value) || 1;// Lấy giá trị số lượng từ input
    let cartNumber = parseInt(cartnumber.textContent) || 0;// Lấy số lượng sản phẩm hiện tại trong giỏ hàng
    cartnumber.textContent = cartNumber + quantity;
    quantityinput.value = 1;
});
