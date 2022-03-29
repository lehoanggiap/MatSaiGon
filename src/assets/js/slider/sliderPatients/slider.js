import {Slider} from '../index.js'
import { SliderBottomButton } from '../sliderBanner/slider.js'
class SliderP extends Slider{
    createView(){
        const htmls = this.slidersInfo.map((patient,index) => {
            return `<div class="col l-12 c-12 m-12">
                        <div class="row">
                            <div class="col l-5 c-10 c-o-1 m-10 m-o-1 l-o-0 patient-shares__img-container">
                                <img src="${patient.img}" alt="" class="patient-shares__img">
                            </div>
                            <div class="col l-7 c-10 c-o-1 m-10 m-o-1 l-o-0 patient-shares__content-container">
                                <h4 class="patient-shares__name">${patient.name}</h4>
                                <p class="patient-shares__job">${patient.job}</p>
                                <p class="patient-shares__content">
                                    ${patient.shares}
                                </p>
                            </div>
                        </div>    
                    </div>`
        })
        return htmls
    }
}


class SliderBottomButtonP extends SliderBottomButton{
    static createView(currentIndex, len){
        let htmls = ''
        for(let i = 0; i < len; i++){
            htmls += `<span class="bottom-slidebutton achievements-and-patient-shares__round-btn ${i === currentIndex ? 'active' : ''}"></span>`
        }
        return htmls
    }    
}

export {SliderP, SliderBottomButtonP}