import { Slider } from "./slider.js";

class SliderS extends Slider{
   

    createView(){
        const htmls = this.slidersInfo.map((item,index) => {
            return `<div class="col l-3 c-10 c-o-1 m-6 m-o-0">
                        <div class="common-service__item">
                            <img src="${item.img}" alt="" class="common-service__img">
                            <a href="#" class="common-service__name">
                                ${item.name}
                            </a>
                            <p class="common-service__des">
                                ${item.des}
                            </p>
                            <a href="#" class="btn common-service__btn">
                            Xem thêm
                            <i class="fas fa-chevron-right"></i> 
                            </a>
                        </div>
                    </div>`
        })
        return htmls
    }
}


export {SliderS}