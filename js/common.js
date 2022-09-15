//햄버거 버튼
$('.menu-tab').click(function () {
    $('.menu-hide').toggleClass('show');
    $('.menu-tab').toggleClass('active');
});
$('a').click(function () {
    $('.menu-hide').removeClass('show');
    $('.menu-tab').removeClass('active');
});