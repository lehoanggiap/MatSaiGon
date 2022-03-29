import { sliderDoctors } from "../sliderDoctors/sliderDoctors.js";
import { SliderP, SliderBottomButtonP} from "./slider.js";

class sliderPatients extends sliderDoctors{

    renderSlider(source){
        const slider = new SliderP(source, this.currentIndex)
        const htmls = slider.createView()
        this.sliderList.innerHTML += htmls.join('')
    }

    renderBottomSlideBtn(){
        const htmls = SliderBottomButtonP.createView(this.currentIndex, this.lastIndex + 1)
        this.bottomSlideBtn.innerHTML = htmls
    }

    activeSlideBtn(){
        const activeBtn = this.bottomSlideBtn.querySelector('.active')
        activeBtn.classList.remove('active')
        this.bottomSlideBtn.childNodes[this.currentIndex].classList.add('active')
    }

    setIntervalSlide(app){
        const autoSlide = setInterval(function(){
            app.loadNextSlide()
        }, 8000)
        return autoSlide
    }

    resetOnResize(){
        this.calcNewCurrentIndex()
        this.getLastIndex()

        //K cần render lại bottom slideBtn vì hiện tại chưa cần đến, width của col luôn full
        this.loadCurrentSlide()
    }

    loadCurrentSlide(){
        //Override lại pt loadCurrentSlide vì lớp cha khi gặp index < 0 thì k đi tiếp,
        //trong khi đó lớp sliderPatients thì đi tiếp
        if(this.currentIndex < 0){
            this.currentIndex = this.lastIndex
        }else if(this.currentIndex > this.lastIndex){
            this.currentIndex = 0
        }
        this.translateX = this.currentIndex*this.itemWidth
        this.sliderList.style.transform = `translateX(-${this.translateX}px)`

        this.activeSlideBtn()
    }

    handleEvents(){
        const app = this

        let autoSlide = app.setIntervalSlide(app)

        function resetTimer(app) {
            clearInterval(autoSlide)
            autoSlide = app.setIntervalSlide(app)
        }

        this.nextBtnCSL.onclick = function(){
            app.loadNextSlide()
            resetTimer(app)
        }

        this.prevBtnCSL.onclick = function(){
            app.loadPrevSlide()
            resetTimer(app)
        }

        this.bottomSlideBtn.childNodes.forEach(function (btn, index){
            btn.onclick = function(e) {
                app.currentIndex = index;
                app.loadCurrentSlide()
                resetTimer(app)
            }
        })
    }
    
}

export {sliderPatients}