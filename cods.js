new fullpage('#fullpage', {

    scrollHorizontally: 800,
    sectionsColor: [ '#4BBFC3', '#7BAABE', 'whitesmoke', '#7F7F7F'],
    anchors:['firstPage','secondPage','thirdPage', 'sectionPage']
});
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    spaceBetwen: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  Fancybox.bind('[data-fancybox="nkar"]', {
    // Your custom options
  });