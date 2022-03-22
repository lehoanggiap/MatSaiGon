import {sliderBanner, sliderService} from './slider/index.js'
import {navBar} from './header/index.js';
const imagesList = [
    '../assets/img/banner/banner-1.jpg',
    '../assets/img/banner/banner-2.png',
    '../assets/img/banner/banner-3.jpg',
    '../assets/img/banner/banner-4.jpg',
];

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
        name: 'Khám mắt',
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

class homePage {
    sliderBanner = new sliderBanner(imagesList)
    sliderService = new sliderService()
    start(){
        this.sliderBanner.create()
        this.sliderService.create()
    }
}

homePage = new homePage()
homePage.start()





    






