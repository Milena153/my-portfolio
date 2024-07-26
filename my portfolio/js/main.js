{ // бургер меню
    const menuBtn = document.querySelector(".header__menu-btn");
    const menuList = document.querySelector(".menu__list");
    const logo = document.querySelector(".heder__logo");

    menuBtn.addEventListener('click', function(){
        this.classList.toggle("header__menu-btn-activ");
        menuList.classList.toggle("menu__list-activ");
        logo.classList.toggle('heder__logo-active');
    })
}