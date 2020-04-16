import Swiper from 'swiper'
import 'swiper/css/swiper.css'

const options = {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}
const mySwiper = () => {
  new Swiper ('.swiper-container', options)
}
export default mySwiper