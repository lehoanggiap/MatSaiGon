class Slider{
    slidersInfo;
    currentIndex;
    constructor(slidersInfo, currentIndex){
        this.slidersInfo = slidersInfo
        this.currentIndex = currentIndex
    }

    createView(){
        const htmls = this.slidersInfo.map((item,index) => {
            return `<a href="#" class="slider-wrapper__image-link" data-index="${index}"
                    style="background: url('${item}') top center / cover no-repeat;">
                    </a>`
        })
        return htmls
    }

    
}

class SliderBottomButton{
    static createView(currentIndex, len){
        let htmls = ''
        for(let i = 0; i < len; i++){
            htmls += `<a href="#" class="bottom-slidebutton ${i === currentIndex ? 'active': ''}" data-index></a>`
        }
        return htmls
    }    
}

export {Slider, SliderBottomButton}

