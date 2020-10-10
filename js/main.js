AOS.init();

$(".page1").hide(),
$(".page2").hide(),
$(".page3").hide(),


$(".work0").click(function () {
        $(".page").show(1000),
        $(".page1").hide(1000),
        $(".page2").hide(1000),
        $(".page3").hide(1000)
})

$(".work1").click(function () {
    $(".page").hide(1000),
    $(".page1").show(1000)
    $(".page2").hide(1000),
    $(".page3").hide(1000)


})

$(".work2").click(function () {
    $(".page").hide(1000),
    $(".page1").hide(1000),
    $(".page2").show(1000),
    $(".page3").hide(1000)

})

$(".work3").click(function () {
    $(".page").hide(1000),
    $(".page1").hide(1000),
    $(".page2").hide(1000),
    $(".page3").show(1000)

})


$('.owl-carousel').owlCarousel({
    items: 3,
    responsive: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    },
    autoPlay: 3000,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    autoHeight: true,
    merge: true,
    loop: true,
    margin: 10,
    video: true,
    lazyLoad: true,
    center: true
})


$(".navbar a").click(function(){
    var z =$(this).attr("href");
    var x = $(z).offset().top;
    $("body , html").animate({
        scrollTop:x-50
    },1500)
})
