import { Slider, SliderBottomButton} from "../sliderBanner/slider.js";
class SliderD extends Slider{
    createView(){
        const htmls = this.slidersInfo.map((doctor,index) => {
            return `<div class="col l-3 c-10 c-o-1 m-6 m-o-0">
                        <div class="doctors-item">
                            <div class="doctors-img-container">
                                <div class="doctors-img-overlay">
                                    <a href="#" class="doctors-watch-info">
                                        Xem thông tin bác sĩ
                                    </a>
                                </div>
                                <img src="${doctor.image}" alt="" class="doctors-img">
                            </div>
                            <a href="#" class="doctors-name">${doctor.name}</a>
                            <p class="doctors-work-place">
                                <span>${doctor.position}</span><br>
                                ${doctor.workPlace}
                            </p> 
                        </div>
                    </div>`
        })
        let lastElement = `<div class="col l-3 c-10 c-o-1 m-6 m-o-0">
                                <div class="doctors-item">
                                    <div class="other-doctors">
                                        <a href="#">
                                            <i class="fa fa-user-plus"></i>
                                        </a>
                                    </div>
                                    <a href="" class="direct-to-other-doctors-page">
                                        Xem thêm<br>
                                        <span>Các Bác Sĩ Khác</span>
                                    </a>
                                </div>
                            </div>`
        htmls.push(lastElement)
        return htmls
    }
}

class SliderBottomButtonD extends SliderBottomButton{
    static createView(currentIndex, len){
        let htmls = ''
        for(let i = 0; i < len; i++){
            htmls += `<div class="bottom-slidebutton bottom-doctors-slidebutton ${i === currentIndex ? 'active': ''}"></div>`
        }
        return htmls
    }    
}

export {SliderD, SliderBottomButtonD}