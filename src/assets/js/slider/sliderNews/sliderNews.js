import { sliderDoctors } from "../sliderDoctors/sliderDoctors.js";
import { SliderN, SliderBottomButtonN } from "./slider.js";

class sliderNews extends sliderDoctors{

    constructor(sliderList, prevBtnCSL, nextBtnCSL, bottomSlideBtn){
        super(sliderList, prevBtnCSL, nextBtnCSL, bottomSlideBtn)
    }


    renderBottomSlideBtn(){
        const htmls = SliderBottomButtonN.createView(this.currentIndex, this.lastIndex + 1 - this.nb_slides)
        this.bottomSlideBtn.innerHTML = htmls
    }

    renderSlider(source){
        const slider = new SliderN(source, this.currentIndex)
        const htmls = slider.createView()
        this.sliderList.innerHTML += htmls.join('')
    }

    // activeSlideBtn(){
    //     const activeBtn = this.bottomSlideBtn.querySelector('.active')
    //     if(activeBtn){
    //         activeBtn.classList.remove('active')
    //         this.bottomSlideBtn.childNodes[this.currentIndex].classList.add('active')
    //     }
    // }

    create(source){
        this.renderSlider(source)
        super.calcWidth()
        super.getLastIndex()
        this.renderBottomSlideBtn()
        this.loadCurrentSlide()
        this.handleEvents()
    }



}

export {sliderNews}