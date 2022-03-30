export const $ = document.querySelector.bind(document);
export const $$ = document.querySelectorAll.bind(document);

export const body = $('body');

export const app = $('.app')
export const loadingScreen = $('.loading-srceen')

export const header = $('.header');
export const header_cIcon = header.querySelector('.ti-close');
export const header_mIcon = header.querySelector('.ti-menu');
export const header_navbar = header.querySelector('.header__navbar-list')

export const bookingBtn = $('.btn.header__btn')
export const bookingBtn_Content = $('.booking-content__btn')
export const bookingBtn_Mobile = $('.service-link--booking')
export const modal = $('.modal')
export const modalBody = $('.modal__body')
export const modalBookingForm = $('.modal__booking-form')
export const booking_CloseBtn = modalBookingForm.querySelector('.modal__form-container i[class*="ti-close"]')


export const consultingBtn = $('.consultant-content__btn')
export const consultingBtn_Mobile = $('.service-link--consulting')
export const consultingForm = $('.modal__consultant-booking-form')
export const consulting_CloseBtn = consultingForm.querySelector('.modal__form-container i[class*="ti-close"]')



export const loadingCircle = $("#loading-circle");
export const sliderBlock = $(".slider")
export const nextBtn = $('.slider-btn.slider-btn--right')
export const bottomSlideBtn = $('.bottom-slidebuttons')
export const prevBtn = $('.slider-btn.slider-btn--left')

export const commonServiceList = $('.common-service__list')
export const prevBtnCSL = $('.common-service__round-btn')
export const nextBtnCSL = $('.common-service__round-btn--right')


export const doctorsList = $('.doctors-list')
export const prevBtnDL = $('.doctors-btn')
export const nextBtnDL = $('.doctors-btn--right')
export const bottomSlideBtn_Doctors = $('.bottom-doctors-slidebuttons')


export const patientsList = $('.patient-shares')
export const prevBtnPL = $('.patient-shares__left-btn')
export const nextBtnPL = $('.patient-shares__right-btn')
export const bottomSlideBtn_Patients = $('.achievements-and-patient-shares__round-btns-container')


export const newsList = $('.news-list')
export const bottomSlideBtn_News = $('.bottom-news-slidebuttons')

