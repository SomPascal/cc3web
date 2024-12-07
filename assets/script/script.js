const handleCarousel = ()=> {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },

        slidesPerView: 2,

        breakpoints: {
            992: {
                slidesPerView: 3
            }
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });      
}
document.addEventListener('DOMContentLoaded', ()=> {
    handleCarousel()
})