import { Slider, SliderBottomButton} from "../sliderBanner/slider.js";
class SliderN extends Slider{
    createView(){
        const htmls = this.slidersInfo.map((news,index) => {
            return `<div class="col l-4 c-10 c-o-1 m-6 m-o-0 mt-16">
                        <div class="news-item">
                            <div class="news-img-container">
                                <img src="${news.img}" alt="" class="news-img">
                            </div>
                            <div class="news-content">
                                <a href="#" class="news-heading">
                                    ${news.title}
                                </a>
                                <p class="news-des">
                                    ${news.des}
                                </p>
                                <a href="#" class="news-btn-watch">
                                    Xem thêm
                                    <i class="fas fa-long-arrow-alt-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>`
        })
        return htmls
    }
}

class SliderBottomButtonN extends SliderBottomButton{
    static createView(currentIndex, len){
        let htmls = ''
        if(len == 1){
            return ''
        }
        
        for(let i = 0; i < len; i++){
            htmls += `<div class="bottom-slidebutton bottom-doctors-slidebutton ${i === currentIndex ? 'active': ''}"></div>`
        }
        return htmls
    }    
}

export {SliderN, SliderBottomButtonN}