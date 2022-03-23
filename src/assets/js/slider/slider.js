class Slider{
    imagesList;
    currentIndex;
    constructor(imagesList, currentIndex){
        this.imagesList = imagesList
        this.currentIndex = currentIndex
    }

    createView(){
        const htmls = this.imagesList.map((image,index) => {
            return `<a href="" class="slider-wrapper__image-link" data-index="${index}"
                    style="background: url('${image}') top center / cover no-repeat;">
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

