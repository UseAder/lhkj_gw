//定位布局  header
$(window).on('scroll', function () {
    var $top = $(this).scrollTop();//滚动条的距离
    if ($top >= 300) {
        var t = document.body.clientWidth;
        $('.header').addClass("header-change-show");
    }
    else if ($top < 300) {
        $('.header').removeClass("header-change-show");
    }
});