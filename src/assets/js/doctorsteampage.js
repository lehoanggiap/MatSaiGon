import {Page} from './page.js';
import {search_hospitals, search_select, arrow_down, arrow_up} from './constant/doctorspage.js';
import {doctorsList, bottomSlideBtn_Doctors, prevBtnDL, nextBtnDL} from './constant/index.js'
import {sliderDoctors} from './slider/index.js'
import {Utils} from './static/utils.js'


search_select.onclick = (e) =>{
    e.stopPropagation();
}
let showList = true;
search_hospitals.onclick = function(){
    if(showList){
        search_select.classList.add('active');
        arrow_down.classList.remove('active');
        arrow_up.classList.add('active');
        showList = false;
    }else{
        search_select.classList.remove('active');
        arrow_down.classList.add('active');
        arrow_up.classList.remove('active');
        showList = true;
    }
}

class Doctorsteampage extends Page{
    sliderDoctors = new sliderDoctors(doctorsList, prevBtnDL, nextBtnDL, bottomSlideBtn_Doctors, false)
    constructor(){
        super();
    }

    handleEvents(){
        const app = this;
        super.handleEvents();

        window.addEventListener('resize', () => {
            app.sliderDoctors.resetOnResize()
        })
       
    }

    start(){
        super.start()
        this.sliderDoctors.create(Utils.doctors)
        this.handleEvents()
    }
}

let page = new Doctorsteampage();
page.start();