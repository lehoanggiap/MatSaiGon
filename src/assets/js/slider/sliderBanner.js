import {Slider, SliderBottomButton} from './slider.js'
import {header, loadingCircle, sliderBlock, nextBtn, bottomSlideBtn, prevBtn} from '../constant/index.js';
const imagesList = [
    '../assets/img/banner/banner-1.jpg',
    '../assets/img/banner/banner-2.jpg',
    '../assets/img/banner/banner-3.jpg',
    '../assets/img/banner/banner-4.jpg',
];

const imagesListMobile = [
    '../assets/img/banner/banner-web-mobile-shopee-1.jpg',
    '../assets/img/banner/banner-web-mobile-shopee-2.jpg',
    '../assets/img/banner/banner-mobile-3.jpg',
    '../assets/img/banner/banner-mobile-4.jpg',
]

class sliderBanner{
    currentIndex = 0
    constructor(){
        
    }

    renderSlider(){
        const slider = new Slider(imagesList, this.currentIndex)
        const htmls = slider.createView()
        const htmlsSliderBtn = SliderBottomButton.createView(this.currentIndex, imagesList.length)

        sliderBlock.innerHTML = htmls.join('') + sliderBlock.innerHTML
        bottomSlideBtn.innerHTML = htmlsSliderBtn
    }

    activeSlideBtn(){
        const activeBtn = bottomSlideBtn.querySelector('.active')
        activeBtn.classList.remove('active')
        bottomSlideBtn.childNodes[this.currentIndex].classList.add('active')
    }

    loadCurrentSlide(){
        sliderBlock.style.transform = `translateX(-${this.currentIndex*100}%)`
        this.activeSlideBtn()
    }

    loadNextSlide(){
        this.currentIndex++
        if(this.currentIndex == imagesList.length){
            this.currentIndex = 0 
        }
        this.loadCurrentSlide()
        this.activeSlideBtn()
    }

    loadPrevSlide(){
        this.currentIndex--
        if(this.currentIndex < 0){
            this.currentIndex = imagesList.length - 1
        }
        this.loadCurrentSlide()
        this.activeSlideBtn()
    }

    setTimeOutLoadNext(app){
        loadingCircle.style.display = "none";
        setTimeout(function() {
            loadingCircle.style.display = "block";
            app.loadNextSlide()
        }, 100)
    }

    setTimeOutLoadCurrent(app){
        loadingCircle.style.display = "none";
        setTimeout(function() {
            loadingCircle.style.display = "block";
            app.loadCurrentSlide()
        }, 100)
    }

    setTimeOutLoadPrev(app){
        loadingCircle.style.display = "none";
        setTimeout(function() {
            loadingCircle.style.display = "block";
            app.loadPrevSlide()
        }, 100)
    }

    setIntervalSlide(app){
        const autoSlide = setInterval(function(){
            app.setTimeOutLoadNext(app)
        }, 4900)
        return autoSlide
    }

    handleEvents(){
        const app = this

        let autoSlide = app.setIntervalSlide(app)

        function resetTimer(app, callback){
            clearInterval(autoSlide)
            callback(app)
            autoSlide = app.setIntervalSlide(app)
        }

        nextBtn.onclick = function(e) {
            resetTimer(app, app.setTimeOutLoadNext)
        }

        prevBtn.onclick = function (e) {
            resetTimer(app, app.setTimeOutLoadPrev)
        }

        bottomSlideBtn.childNodes.forEach(function (btn, index){
            btn.onclick = function(e) {
                e.preventDefault();
                app.currentIndex = index;
                resetTimer(app, app.setTimeOutLoadCurrent)
            }
        })


        document.onscroll = function(){
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            if(scrollTop > header.offsetHeight){
               header.classList.add('fixed')
            }else{
                header.classList.remove('fixed')
            }
            
        }
        
    }

    resetSliderImage(){
        let docWidth = window.innerWidth
        let sliders = sliderBlock.children;
        if(docWidth < 739){
            for(let i = 0; i < sliders.length; i++){
                sliders[i].style.backgroundImage = `url("${imagesListMobile[i]}")`
            }
        }else{
            for(let i = 0; i < sliders.length; i++){
                sliders[i].style.backgroundImage = `url("${imagesList[i]}")`
            }
        }
    }

    create(){
        this.renderSlider()
        this.handleEvents()
    }

}

export {sliderBanner}