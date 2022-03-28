import {sliderBanner, sliderService} from './slider/index.js'
import {navBar} from './header/index.js';
import {loadingScreen, commonServiceList, prevBtnCSL, nextBtnCSL} from './constant/index.js'
import {doctorsList, bottomSlideBtn_Doctors, prevBtnDL, nextBtnDL} from './constant/index.js'
import {sliderDoctors} from './slider/sliderDoctors.js'


const servicesList = [
    {
        img: '../assets/img/eyecheck.png',
        name: 'Khám mắt',
        des: 'Khám, chẩn đoán và điều trị ngoại trú các bệnh lý về mắt cũng như thực hiện các trung, tiểu phẫu về mắt.'
    },
    {
        img: '../assets/img/commiteyedisease.png',
        name: 'Điều trị tật khúc xạ',
        des: 'Kiểm tra thị lực và đo độ khúc xạ, điều trị và kiểm soát các tật khúc xạ như cận thị, viễn thị, loạn thị'
    },
    {
        img: '../assets/img/surgey.png',
        name: 'Phẫu thuật khúc xạ',
        des: 'Điều trị khúc xạ bằng các phương pháp hiện đại sử dụng laser như LASIK, STREAMLIGHT, FEMTOSECOND LASIK, RELEX SMILE…'
    },
    {
        img: '../assets/img/phacosurgey.png',
        name: 'Phẫu thuật PHACO',
        des: 'Phẫu thuật Phaco loại bỏ thủy tinh thể bị đục, thay thế bằng ống kính nội nhãn (IOL), khôi phục thị lực cho bệnh nhân'
    
    },
    {
        img: '../assets/img/nhannhi.png',
        name: 'Nhãn nhi',
        des: 'Các phương pháp điều trị bệnh lý về mắt thường gặp ở trẻ em'
    },
]

const doctors = [
    {
        image: '../assets/img/doctors/NS-Thuyết-Minh_NGTpng.png',
        name: 'BS CKI Từ Thanh Nữ Thuyết Minh',
        workPlace: 'Mắt Sài Gòn Lê Thị Riêng',
        position: 'Trưởng khoa khám'
    },
    {
        image: '../assets/img/doctors/BS-Yến-Nhi-CMT8.png',
        name: 'ThS BS Nguyễn Huỳnh Yến Nhi',
        workPlace: 'Mắt Sài Gòn Ngô Gia Tự',
        position: 'Bác sĩ khoa khám'
    },
    {
        image: '../assets/img/doctors/BS-Mỹ-.jpg',
        name: 'BS CKI Trần Xuân Mỹ',
        workPlace: 'Mắt Sài Gòn Nha Trang',
        position: 'Phó trưởng khoa khám'
    },
    {
        image: '../assets/img/doctors/BS-Thủy-NT-.png',
        name: 'ThS BS Nguyễn Thị Thanh Thủy',
        workPlace: 'Bệnh viện Mắt Sài Gòn Nha Trang',
        position: 'Bác sĩ khoa khám'
    },

]

class homePage {
    navBar = new navBar();
    sliderBanner = new sliderBanner()
    sliderService = new sliderService(commonServiceList, prevBtnCSL, nextBtnCSL)
    sliderDoctors = new sliderDoctors(doctorsList, prevBtnDL, nextBtnDL, bottomSlideBtn_Doctors)
    

    handleEvents(){
        const app = this
        window.onresize = function(){
            app.navBar.resetOriginalState()
            app.sliderBanner.resetSliderImage()
            app.sliderService.resetOnResize()
            app.sliderDoctors.resetOnResize()
        }

        document.addEventListener("DOMContentLoaded", function(event) {
            app.sliderBanner.resetSliderImage()
        });

        window.onload = function(){
            Promise.resolve().then(function() {
                app.sliderService.placeTransBtn()
            })
            .then(function() {
                loadingScreen.style.display = "none"
            })
        }

    }

    start(){
        this.navBar.create();
        this.sliderBanner.create()
        this.sliderService.create(servicesList) 
        this.sliderDoctors.create(doctors)
        this.handleEvents()
    }
}

let homepage = new homePage()
homepage.start()





    






