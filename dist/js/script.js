document.addEventListener("DOMContentLoaded", init);
window.onload = function() {
    resizeMap();   
};
window.addEventListener("resize", resizeMap);
function init() {
    // мобильное меню
    $(".hamburger").colorbox({ inline: true, width: "100%" });
    // галерея
    $(".carousel-item__thumb-overlay").colorbox({ width: "100%" });
    // слайдеры
    $(".carousel").owlCarousel({
        nav: true,
        dots: true,
        margin: 20,
        //center: true,
        navText: ["",""],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });
    $(".projects").owlCarousel({
        nav: true,
        dots: true,
        margin: 20,
        navText: ["",""],        
        responsive: {
            0:{
                items:1
            },
            768:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });
    $(".gallery-carousel").owlCarousel({
        nav: true,
        dots: true,
        margin: 10,
        navText: ["",""],        
        responsive: {
            0:{
                items:2
            },
            768:{
                items:6
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });    
    $(".prj-types").owlCarousel({
        nav: true,
        dots: true,
        margin: 10,
        navText: ["",""],        
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            1200:{
                items:4
            }
        }
    });    
    $(".testimonials").owlCarousel({
        nav: true,
        loop: true,
        navText: ["",""],        
        items: 1
    });
    // вкладки
    $(".tabs__control").each(function() {
        $(this).click(function () {
            var id = $(this).data("toggle");
            $(this).addClass("tabs__control--active");
            $(this).siblings().removeClass("tabs__control--active"); 
            $(".project-card").hide();
            $(".prj-types__container").hide();
            $(".price-panel").hide();
            $("#" + id).fadeIn(); 
        });       
    });
    // кнопка прикрепить файл (форма на странице Контакты)
    $("#costingFormFileButton").click(function () {
        document.getElementById("costingFormFileInput").click();
    });
    // переключение в галерее
    $(".gallery-carousel__item-thumb").each(function() {
        $(this).click(function () {
            // $(this).siblings().removeClass("preview__thumb--selected");
            // $(this).addClass("preview__thumb--selected");
            var bg = $(this).css("background-image");
            var reg = /(?:\(['"]?)(.*?)(?:['"]?\))/;
            var extracterUrl = reg.exec(bg)[1];
            document.querySelector("#galleryImage").src = extracterUrl;
        });
    });
    //скроллеры
    $(".scroller-wrapper").each(function () {
        new IScroll(this, {
            scrollX: true, 
            scrollY: false,
            eventPassthrough: true,
            scrollbars: "custom",
            bounce: false
        });
    });

    var tabsScroller = new IScroll(".tabs__wrapper", {
        scrollX: true, 
        scrollY: false,
        eventPassthrough: true
    }); 
}
function resizeMap() {
   var map = document.getElementById("map");
   if (!map) return;
   var height = document.getElementsByClassName("testimonials")[0].getBoundingClientRect().height;
   map.style.height = height + "px";
}