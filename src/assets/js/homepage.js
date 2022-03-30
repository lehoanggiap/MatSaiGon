import {body} from './constant/index.js'
import {$$} from './constant/index.js'
import {loadingScreen, commonServiceList, prevBtnCSL, nextBtnCSL} from './constant/index.js'
import {doctorsList, bottomSlideBtn_Doctors, prevBtnDL, nextBtnDL} from './constant/index.js'
import {patientsList, prevBtnPL, nextBtnPL, bottomSlideBtn_Patients} from './constant/index.js'

import {modal, modalBody, bookingBtn, bookingBtn_Content, bookingBtn_Mobile, modalBookingForm, booking_CloseBtn} from './constant/index.js'
import {consultingBtn, consultingBtn_Mobile, consultingForm, consulting_CloseBtn} from './constant/index.js'

import {newsList, bottomSlideBtn_News} from './constant/index.js'
import {navBar} from './header/index.js';
import {sliderBanner, sliderService} from './slider/index.js'
import {sliderDoctors, sliderPatients} from './slider/index.js'
import {sliderNews} from './slider/index.js'
import {Modal} from './modal/index.js'

import {Validator} from './validator/index.js'

let validator = new Validator()
console.log(validator)

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

const patients = [
    {
        img: '../assets/img/luongbichhuu.png',
        name: 'Lương Bích Hữu',
        job: 'Ca sĩ',
        shares: 'Ít ai biết Hữu bị cận. Để phù hợp với tính chất công việc, Hữu thường đeo lens nhưng những bất tiện phát sinh và nguy cơ gây ra đối với mắt khi sử dụng lâu dài khiến Hữu hạ quyết tâm sắp xếp thời gian để đi xóa cận.Hiểu được tầm quan trọng của đôi mắt mình nên Hữu đã phải tìm rất kỹ và quyết định chọn phẫu thuật xóa cận ở Trung tâm nhãn khoa Eagle Eye Centre VietNam (EEC). Được biết, EEC là sự hợp tác hoàn hảo giữa chuẩn mực chất lượng y tế của Singapore và kinh nghiệm dày dặn của bác sĩ đầu ngành tại Hệ Thống Bệnh Viện Mắt Sài Gòn. Ấn tượng nhất với Hữu đó là quy trình “Zero Waiting Time” – khám phẫu thuật không chờ đợi, rất phù hợp với lịch trình công việc dày của Hữu; cùng với 10 đặc quyền 5 sao khác đúng chuẩn Singapore tại EEC. Hữu được ThS BS CKI Lê Nguyễn Huy Cường trực tiếp thăm khám, tư vấn và phẫu thuật với ReLEx Smile – phương pháp tốt nhất trị trường hiện này. Hữu xin chân thành cám ơn đội ngũ y bác sỹ Trung tâm nhãn khoa Eagle Eye Centre Vietnam đã giúp Hữu lấy lại thị lực mà Hữu hằng mong ước. Sau nhiều năm làm bạn với cặp kính cận, giờ Hữu đã có thể say bye với nó. Mắt Hữu giờ sáng rực như viên kim cương vậy đó, nhìn gì cũng rõ.'
    },
    {
        img: '../assets/img/Lynk-lee.png',
        name: 'Lynk Lee',
        job: 'Ca sĩ',
        shares: `Bị cận từ năm lớp 8 đến bây giờ đã là 20 năm Linh sống chung cùng cặp kính cận. Vì tính chất công việc, Linh phải dùng lens nhưng mắt lại bị khô. Mấy anh chị em trong nghề cũng chia sẻ rằng bác sĩ bảo không nên lạm dụng đeo lens nữa vìdễ làm xước hay rách giác mạc nên Linh cũng bắt đầu lo.  
        Thế là từ đó, Linh quyết sắp xếp lại công việc, đi xóa cận ngay và luôn.
        Qua sự giới thiệu của bạn bè trong giới đã từng mổ cận, Linh đã chọn Bệnh viện Mắt Sài Gòn và được bác sĩ trưởng khoa lasik Trương Công Minh, người có hơn 20 năm kinh nghiệm phẫu thuật với phương pháp Femto vì giác mạc của Linh mỏng. 
        Nguyện vọng có được một đôi mắt sáng khỏe đã trở thành hiện thực. Linh đã tháo kính thành công, tự tin tham gia Gương Mặt Thân Quen, rất nhiều show diễn khác của mình và quan trọng nhất là được nhìn thấy khuôn mặt yêu thương của những người hâm mộ. `
    },
    {
        img: '../assets/img/NSND-Hồng-Vân.png',
        name: 'Cô Hồng Vân',
        job: 'NSND',
        shares: `Tôi rất quan tâm và chăm lo cho sức khỏe đôi mắt của cả gia đình vì mẹ từng bị đục thủy tinh thể. Quãng thời gian đó tôi và các thành viên lúc nào cũng ở cạnh động viên bà để tinh thần phấn khởi. Mặc dù đã qua phẫu thuật nhưng mắt bà có hiện tượng mờ lại một thời gian sau đó. Sau khi đưa mẹ đi khám mắt và nhận được tư vấn của bác sĩ, bà nhận ra tình trạng mắt mờ còn liên quan đến các vấn đề khác như tuổi tác, độ lão. Bác sĩ Mắt Sài Gòn đã tận tình giải thích, thăm khám, đo mắt và chỉnh lại độ của mắt kính nên bây giờ mắt bà đã nhìn rõ hơn. 
        Ước mơ nhìn rõ con cháu của bà giờ đã thành sự thật. Cảm ơn Mắt Sài Gòn đã mang ánh sáng đến tuổi xế chiều của mẹ.`
    }
]


const news = [
    {
        img: '../assets/img/news/news1.png',
        title: 'Tập đoàn Y khoa Sài Gòn tổ chức Hội Nghị Khoa Học Lần Thứ Nhất – 19.02.2022',
        des: 'Ngày 19/02/2022, Hội nghị khoa học kỹ thuật lần thứ nhất của Tập đoàn Y khoa Sài Gòn…',
    },
    {
        img: '../assets/img/news/news2.jpg',
        title: 'Thông báo chương trình ưu đãi phẫu thuật khúc xạ LASIK tháng 02.2022',
        des: 'Hệ thống bệnh viện Mắt Sài Gòn thông báo ưu đãi phí dịch vụ phẫu thuật khúc xạ…',
    },
    {
        img: '../assets/img/news/news3.jpg',
        title: 'Tập đoàn Carl Zeiss (Đức) ký kết hợp tác toàn diện với Hệ thống Mắt Sài Gòn',
        des: 'Ngày 27/11/2021 vừa qua, Tập đoàn thiết bị nhãn khoa Carl Zeiss (Zeiss) và Hệ thống Bệnh viện…',
    }
]

const options = {
    form: '.modal__form',
    
}

const setsOfElements = [
    {
        openBtns: [bookingBtn, bookingBtn_Content, bookingBtn_Mobile],
        modalElement: modalBookingForm,
        closeBtn: booking_CloseBtn,
    },
    {
        openBtns: [consultingBtn, consultingBtn_Mobile],
        modalElement: consultingForm,
        closeBtn: consulting_CloseBtn,
    }
]

class homePage {
    navBar = new navBar();
    sliderBanner = new sliderBanner()
    sliderService = new sliderService(commonServiceList, prevBtnCSL, nextBtnCSL)
    sliderDoctors = new sliderDoctors(doctorsList, prevBtnDL, nextBtnDL, bottomSlideBtn_Doctors)
    sliderPatients = new sliderPatients(patientsList, prevBtnPL, nextBtnPL, bottomSlideBtn_Patients)
    sliderNews = new sliderNews(newsList, null, null, bottomSlideBtn_News)
    modal = new Modal(modal, modalBody, setsOfElements)
    

    handleEvents(){
        const app = this
        const linkElements = $$('a')

        window.onresize = function(){
            app.navBar.resetOriginalState()
            app.sliderBanner.resetSliderImage()
            app.sliderService.resetOnResize()
            app.sliderDoctors.resetOnResize()
            app.sliderPatients.resetOnResize()
            app.sliderNews.resetOnResize()
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
                body.style.overflow = "scroll"
            })
        }

        Array.from(linkElements).forEach((link,index) => {
            if(!link.onclick){
                if(link.href.slice(-1) == "#"){
                    link.onclick = function(){
                        window.location.href = './buildingPage.html';
                    }
                }
            }
        })
        
    }

    start(){
        this.navBar.create();
        this.sliderBanner.create()
        this.sliderService.create(servicesList) 
        this.sliderDoctors.create(doctors)
        this.sliderPatients.create(patients)
        this.sliderNews.create(news)
        this.modal.create();
        this.handleEvents()
    }
}

let homepage = new homePage()
homepage.start()





    






