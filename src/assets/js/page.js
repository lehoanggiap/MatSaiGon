import {header, modal, loadingScreen} from './constant/page.js'
import {navBar} from './header/index.js';
import {$, $$} from './constant/page.js'
import {Modal} from './modal/index.js'
import {Validator} from './validator/index.js'
import {Utils} from './static/utils.js'

const header_cIcon = header.querySelector('.ti-close');
const header_mIcon = header.querySelector('.ti-menu');
const header_navbar = header.querySelector('.header__navbar-list')

const bookingBtn = $('.btn.header__btn')
const modalBody = $('.modal__body')
const modalBookingForm = $('.modal__booking-form')
const booking_CloseBtn = modalBookingForm.querySelector('.modal__form-container i[class*="ti-close"]')

const options = {
    form: '.modal__booking-form .modal__form',
    formGroupSelector: '.js-modal_form-group',
    errorSelector: '.booking-form__error-message',
    submitBtn : '.modal__btn',
    rules: [
        Validator.isRequired('input[name="booking-person"]', 'Vui lòng chọn một trong các tùy chọn sau'),
        Validator.isRequired('#form__name-input'),
        Validator.isRequired('#form__phone-input'),
        Validator.isPhone('#form__phone-input'),
        Validator.isRequired('#form__email-input'),
        Validator.isEmail('#form__email-input'),
        Validator.isDate('#booking-form__date-input'),
        Validator.minDate('#booking-form__date-input'),
        Validator.isRequired('#booking-form__time-input'),
        Validator.minTime('#booking-form__time-input')
    ],
    onSubmit: function (data){
        loadingScreen.style.display = "block"
        return new Promise(function (resolve){
            console.log(data);
            setTimeout(function () {
                resolve()
            }, 4000)
        })
    }
}

Utils.setsOfElements = [
    {
        openBtns: [bookingBtn],
        modalElement: modalBookingForm,
        closeBtn: booking_CloseBtn,
        modalForm: modalBookingForm.querySelector('.modal__form')
    },
]

export class Page{
    navBar = new navBar(header_cIcon,header_mIcon, header_navbar);
    modal = new Modal(modal, modalBody, Utils.setsOfElements)
    validator = new Validator(options)
    constructor(){

    }
    handleEvents(){
        const app = this
        const linkElements = $$('a')
        window.addEventListener('resize', () => {
            app.navBar.resetOriginalState()
        })

        Array.from(linkElements).forEach((link,index) => {
            if(!link.onclick){
                if(link.href.slice(-1) == "#"){
                    link.onclick = function(e){
                        e.preventDefault();
                        window.location.href = './buildingPage.html';
                    }
                }
            }
        })

        document.onscroll = function(){
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            if(scrollTop > header.offsetHeight){
               header.classList.add('fixed')
            }else{
                header.classList.remove('fixed')
            }
            
        }
    }

    start(){
        this.navBar.create();
        this.handleEvents();
        this.modal.create();
    }

}