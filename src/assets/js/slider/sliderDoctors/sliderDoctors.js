import { sliderService } from "../sliderService/sliderService.js";
import { SliderD, SliderBottomButtonD } from "./sliderD.js"

class sliderDoctors extends sliderService{
    constructor(sliderList, prevBtnCSL, nextBtnCSL, bottomSlideBtn, renderLast = true){
        super(sliderList, prevBtnCSL, nextBtnCSL)
        this.bottomSlideBtn = bottomSlideBtn
        this.renderLast = renderLast
    }

    renderSlider(source){
        const slider = new SliderD(source, this.currentIndex, this.renderLast)
        const htmls = slider.createView()
        this.sliderList.innerHTML += htmls.join('')
    }

    activeSlideBtn(){
        const activeBtn = this.bottomSlideBtn.querySelector('.active')
        if(activeBtn){
            //Trường hợp nếu chỉ có 1 slide thì k cần render ra bottom btn slider
            activeBtn.classList.remove('active')
            if(this.currentIndex <= this.nb_slides){
                this.bottomSlideBtn.childNodes[0].classList.add('active')
            }else if(this.currentIndex > this.nb_slides){
                this.bottomSlideBtn.childNodes[this.currentIndex - this.nb_slides].classList.add('active')
            }
            
        }
    }

    loadCurrentSlide(){
        super.loadCurrentSlide()
        this.activeSlideBtn()
    }

    renderBottomSlideBtn(){
        const htmls = SliderBottomButtonD.createView(this.currentIndex, this.lastIndex + 1 - this.nb_slides)
        this.bottomSlideBtn.innerHTML = htmls
    }

    resetOnResize(){
        //Tính lại index trên màn mới, đồng thời tính luôn độ dài mới của list
        // this.calcNewCurrentIndex()
        if(this.prevBtnCSL && this.nextBtnCSL){
            this.prevBtnCSL.classList.remove('disabled')
            this.nextBtnCSL.classList.remove('disabled')
        }

        this.calcWidth()

        //Lấy last index mới
        this.getLastIndex()

        //Có last index thì ms generate ra bottomSlideBtn
        this.renderBottomSlideBtn()

        //Sau khi gen lại thì tham chiếu tới bottom slide btn k còn nên phải chạy lại handleEvents
        this.handleEvents()

        //load Current Slide
        this.loadCurrentSlide()  
    }

    handleEvents(){
        const app = this

        if(this.nextBtnCSL){
            this.nextBtnCSL.onclick = function(){
                app.loadNextSlide()
            }
        }

        if(this.prevBtnCSL){
            this.prevBtnCSL.onclick = function(){
                app.loadPrevSlide()
            }
        }

        this.bottomSlideBtn.childNodes.forEach(function (btn, index){
            btn.onclick = function(e) {
                if(index > 0){
                    index += app.nb_slides
                }
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
