// Lấy các phần tử cần thiết
const modal = document.querySelector('.modal');
const buyButtons = document.querySelectorAll('.place-buy-btn');
const closeButton = document.querySelector('.modal-close');

// Hàm hiển thị modal
function showModal() {
    modal.style.display = 'block';
}

// Hàm ẩn modal
function hideModal() {
    modal.style.display = 'none';
}

// Thêm sự kiện click cho các nút mua vé
buyButtons.forEach(button => {
    button.addEventListener('click', showModal);
});

// Thêm sự kiện click cho nút đóng modal
closeButton.addEventListener('click', hideModal);

// Đóng modal khi click bên ngoài modal
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        hideModal();
    }
});
