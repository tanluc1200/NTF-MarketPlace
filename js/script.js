window.addEventListener("beforeunload", function () {
    // Cuộn lên đầu trang
    document.documentElement.scrollTop = 0; // Cho trình duyệt chính
    document.body.scrollTop = 0; // Cho các trình duyệt khác (hoặc cũ)
});
const btnMenu = document.querySelector(".header-mobile-menu");
const menu = document.querySelector(".header-menu");
btnMenu.onclick = function () {
    menu.classList.toggle("active");
};
