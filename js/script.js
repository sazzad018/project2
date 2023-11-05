//-------- slider part
$('.popular_destination_slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  centerMode: true,
  centerPadding: '0px',
  pauseOnHover:false,
  responsive: [
    {
      breakpoint: 1399,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
var swiper = new Swiper(".slider_content", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction:false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  centeredSlides: true,
});
//----------- counter part

$('.count').counterUp({
  delay: 10,
  time: 1000
});



$('.testimonial_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  pauseOnHover:false,
  dots: true
});


//----------- top_btn part


let top_btn =document.querySelector('.top_btn')

window.addEventListener('scroll',()=> {
  let scrolling = this.scrollY

  if(scrolling > 200){
    top_btn.classList.add('top_active')
  }
  else{
    top_btn.classList.remove('top_active')
  }
})

top_btn.addEventListener('click',()=>{
  window.scrollTo({
    top:0,
    behavior: 'smooth',
  })
})