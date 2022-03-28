import { sliderService } from "./sliderService.js";
import { SliderD, SliderBottomButtonD } from "./sliderD.js"

class sliderDoctors extends sliderService{
    constructor(sliderList, prevBtnCSL, nextBtnCSL, bottomSlideBtn){
        super(sliderList, prevBtnCSL, nextBtnCSL)
        this.bottomSlideBtn = bottomSlideBtn
    }

    renderSlider(source){
        const slider = new SliderD(source, this.currentIndex)
        const htmls = slider.createView()
        this.sliderList.innerHTML += htmls.join('')
    }

    activeSlideBtn(){
        const activeBtn = this.bottomSlideBtn.querySelector('.active')
        activeBtn.classList.remove('active')
        this.bottomSlideBtn.childNodes[this.currentIndex].classList.add('active')
    }

    loadCurrentSlide(){
        super.loadCurrentSlide()
        this.activeSlideBtn()
    }

    resetOnResize(){
        this.calcNewCurrentIndex()
        this.getLastIndex()

        this.renderBottomSlideBtn()

        this.handleEvents()

        super.resetOnResize()
        
    }
    
    renderBottomSlideBtn(){
        const htmls = SliderBottomButtonD.createView(this.currentIndex, this.lastIndex + 1)
        this.bottomSlideBtn.innerHTML = htmls
    }

    handleEvents(){
        const app = this

        this.nextBtnCSL.onclick = function(){
            app.loadNextSlide()
        }

        this.prevBtnCSL.onclick = function(){
            app.loadPrevSlide()
        }

        this.bottomSlideBtn.childNodes.forEach(function (btn, index){
            btn.onclick = function(e) {
                app.currentIndex = index;
                app.loadCurrentSlide()
            }
        })
    }

    create(source){
        this.renderSlider(source)
        super.calcWidth()
        super.getLastIndex()
        this.renderBottomSlideBtn()
        this.loadCurrentSlide()
        this.handleEvents()
    }

}

export {sliderDoctors}
