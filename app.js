$(document).ready(() => {

    // Open and close the hidden menus
    $('.hidden-menu').slideUp();

    $('.feature-list').click((e) => {
        $(e.currentTarget).children('.hidden-menu').slideToggle();
        $(e.currentTarget).closest('li').find('i').toggleClass('rotate');
    });

    $('.company-list').click((e) => {
        $(e.currentTarget).children('.hidden-menu').slideToggle();
        $(e.currentTarget).closest('li').find('i').toggleClass('rotate');
    });

    // change hero image based on screen width
    $(window).on('resize', function () {
        let screenW = $(window).width();

        if (screenW <= 650) {
            $('.hero-img').attr('src', 'https://github.com/Benjihunt97/Intro-section-with-dropdown-navigation/blob/main/images/image-hero-mobile.png?raw=true');
        } else {
            $('.hero-img').attr('src', 'https://github.com/Benjihunt97/Intro-section-with-dropdown-navigation/blob/main/images/image-hero-desktop.png?raw=true');
        }
    });

    // open and close the menu in mobile
    $('.fa-bars').click(() => {
        $('.main-list').animate({
            'right': '0'
        },500);
    });

    $('.fa-close').click(() => {
        $('.main-list').animate({
            'right': '-100%'
        }, 500);
    });
});
