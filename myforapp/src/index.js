import Swiper from "swiper/dist/js/swiper.js"
import 'swiper/dist/css/swiper.min.css'
import 'font-awesome/css/font-awesome.css'
import './assets/css/main.css'
const data = ['../assets/img/1.jpg','../assets/img/2.jpg','../assets/img/3.jpg','../assets/img/5.jpg','../assets/img/6.jpg','../assets/img/7.jpg','../assets/img/10.jpg']

$(document).ready(function () {
    console.log('on ready')
    // $("#loading").on("click", () => {
    //     $(".refreshing").removeClass('hidden').addClass('shown')
    // })


    var mySwiper = new Swiper('.swiper-container', {
        speed: 400,
        spaceBetween: 1,
        direction: 'vertical',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on:{
            init:function() {
                console.log('slide init');
            }, 
            slideChangeTransitionStart:function() {
                console.log('slide changed start');
            },
            slideChangeTransitionEnd:function() {
                console.log('slide changed end');
            }
        }
    });
})

