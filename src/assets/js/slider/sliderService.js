import { sliderBanner } from "./sliderBanner.js";
import { SliderS } from './sliderS.js'

class sliderService extends sliderBanner{
    itemWidth = 0
    translateX = 0
    SERVICE_ITEMS_WIDTH = 0
    SERVICE_LIST_WIDTH = 0
    lastIndex = 0
    
    constructor(sliderList, prevBtnCSL, nextBtnCSL){
       super() 
       this.sliderList = sliderList  
       this.SERVICE_LIST_WIDTH = this.sliderList.getBoundingClientRect().width
       this.prevBtnCSL = prevBtnCSL
       this.nextBtnCSL = nextBtnCSL
    }

    renderSlider(source){
        const slider = new SliderS(source, this.currentIndex)
        const htmls = slider.createView()
        this.sliderList.innerHTML = htmls.join('')
    }

    calcWidth(){
        let res = 0
        let marginLeft = 0
        let itemWidth = 0
        let styleItem = null

        Array.from(this.sliderList.children).forEach(function(element){
            itemWidth = element.getBoundingClientRect().width
            styleItem = element.currentStyle || window.getComputedStyle(element)
            marginLeft = parseFloat(styleItem.marginLeft.slice(0,-2))
            res += itemWidth + marginLeft
        })

        this.itemWidth = itemWidth + marginLeft
        this.SERVICE_ITEMS_WIDTH = res + marginLeft;
    }

    placeTransBtn(){
        let height = this.sliderList.getBoundingClientRect().height
        this.nextBtnCSL.style.top = height/2 + 'px'
        this.prevBtnCSL.style.top = height/2 + 'px'
    }

    loadCurrentSlide(){
        if(this.currentIndex <= 0){
            this.currentIndex = 0
            this.prevBtnCSL.classList.add('disabled')
            this.nextBtnCSL.classList.remove('disabled')

        }else if(this.currentIndex >= this.lastIndex){
            this.currentIndex = this.lastIndex
            this.nextBtnCSL.classList.add('disabled')
            this.prevBtnCSL.classList.remove('disabled')
        }

        this.translateX = this.currentIndex*this.itemWidth
        this.sliderList.style.transform = `translateX(-${this.translateX}px)`
    }

    getLastIndex(){
        let visibleServices = Math.round(this.SERVICE_LIST_WIDTH/this.itemWidth)
        let actualServices = Math.round(this.SERVICE_ITEMS_WIDTH/this.itemWidth)
        this.lastIndex = actualServices - visibleServices
    }

    resetOnResize(){
        //phải nằm trc getLastIndex() vì last Index reset lại width của list cũ
        this.calcNewCurrentIndex()
        this.getLastIndex()

        this.prevBtnCSL.classList.remove('disabled')
        this.nextBtnCSL.classList.remove('disabled')

        this.loadCurrentSlide()
    }

    calcNewCurrentIndex(){
        let oldWidth = this.SERVICE_LIST_WIDTH
        let oldItemWidth = this.itemWidth

        this.calcWidth()
        this.SERVICE_LIST_WIDTH = this.sliderList.getBoundingClientRect().width

        //Tại vì sl item trên mỗi màn hình là khác nhau, do đó startIndex sẽ khác nhau
        //lấy width lớn hơn thì width nhỏ hơn sẽ ra sl item mà width lớn hơn đã đi đc
        //sau đó tùy thuộc vào việc chuyển ra màn hình nhỏ hay hơn mà cộng thêm index hoặc trừ bớt đi

        let oldListIndex = Math.round(oldWidth/oldItemWidth)
        let newListIndex = Math.round(this.SERVICE_LIST_WIDTH/this.itemWidth)
        let dis = Math.abs(newListIndex - oldListIndex)

        if(this.SERVICE_LIST_WIDTH > oldWidth){
            this.currentIndex -= dis
        }else{
            this.currentIndex += dis
        }

        if(this.currentIndex < 0){
            //Nếu list trên màn mobile ms di chuyển 1 lần thì còn chưa đụng đến startIndex của list trên PC,
            //do đó dis sẽ lớn hơn currentIndex
            this.currentIndex = 0
        }

    }

    loadNextSlide(){
        this.prevBtnCSL.classList.remove('disabled')
        this.currentIndex += 1
        this.loadCurrentSlide()
    }

    loadPrevSlide(){
        this.nextBtnCSL.classList.remove('disabled')
        this.currentIndex -= 1
        this.loadCurrentSlide()
    }

    handleEvents(){
        const app = this

        this.nextBtnCSL.onclick = function(){
            app.loadNextSlide()
        }

        this.prevBtnCSL.onclick = function(){
            app.loadPrevSlide()
        }
    }


    create(source){
        this.renderSlider(source)
        this.calcWidth()
        this.getLastIndex()
        this.loadCurrentSlide()
        this.handleEvents()
    }
}


export {sliderService}