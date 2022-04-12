import {modal} from '../constant/page.js'

export function getModal(){
    modal.innerHTML += `<div class="modal__overlay"></div>
                            <div class="modal__body">
                                <div class="modal__booking-form">
                                    <div class="grid">
                                        <div class="row booking-from_row">
                                            <div class="col l-5 m-5 c-12">
                                                <div class="modal__notes">
                                                    <h2 class="notes__heading">
                                                        Lưu ý:
                                                    </h2>
                                                    <ul class="notes__list">
                                                        <li class="notes__item">
                                                            Lịch hẹn chỉ có hiệu lực khi Quý khách được xác nhận chính thức từ Bệnh viện thông qua điện thoại hoặc email.
                                                        </li>
                                                        <li class="notes__item">
                                                            Quý khách sử dụng dịch vụ đặt hẹn trực tuyến, vui lòng đặt hẹn ít nhất 24h trước khi đến khám.
                                                        </li>
                                                        <li class="notes__item">
                                                            Quý khách vui lòng cung cấp thông tin chính xác để được hỗ trợ nhanh nhất.
                                                        </li>
                                                        <li class="notes__item">
                                                            Trường hợp khẩn cấp hay có triệu chứng nguy hiểm, vui lòng liên hệ trực tiếp cơ sở y tế để kịp thời xử lý.
                                                        </li>
                                                    </ul>
                                                    <div class="service-item">
                                                        <a href="tel:0963075062" class="service-item__link">
                                                            <img src="../assets/img/phone.png" alt="" class="service-img">
                                                            <span class="service-name">Hotline: 0963075062</span>
                                                            <i class="fas fa-chevron-right service-icon"></i>
                                                        </a>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="col l-7 m-7 c-12">
                                                <div class="modal__form-container">
                                                    
                                                    <i class="ti-close"></i>
                                                    <h2 class="form__heading">
                                                        ĐẶT LỊCH KHÁM BỆNH
                                                    </h2>

                                                    <form novalidate action="" class="modal__form">
                                                        <div class="booking-form__slt-container">
                                                            <p class="booking-form__group-slt-label">
                                                                Bạn muốn đặt hẹn khám cho
                                                            </p>
                                                            <div class="booking-form__slt-group js-modal_form-group">
                                                                <input type="radio" name="booking-person" id="self" value="Bản thân" class="booking-form__radio-btn">
                                                                <label for="self" class="booking-form__label-radio-btn">Bản thân</label>
                                                                <input type="radio" name="booking-person" id="other" value="Người thân" class="booking-form__radio-btn">
                                                                <label for="other" class="booking-form__label-radio-btn">Người thân</label>
                                                                <span class="booking-form__error-message">
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div class="form__name-field js-modal_form-group">
                                                            <label for="form__name-input" class="form__name-label">Họ tên</label>
                                                            <input type="text" name="name" id="form__name-input" class="form__name-input">
                                                            <span class="booking-form__error-message text-input">
                                                            </span>
                                                        </div>
                                                        <div class="form__phone-field js-modal_form-group">
                                                            <label for="form__phone-input" class="form__phone-label">Số điện thoại</label>
                                                            <input type="text" name="phone" id="form__phone-input" class="form__phone-input">
                                                            <span class="booking-form__error-message text-input">
                                                            </span>
                                                        </div>
                                                        <div class="form__email-field js-modal_form-group">
                                                            <label for="form__email-input" class="form__email-label">Email</label>
                                                            <input type="text" name="email" id="form__email-input" class="form__email-input">
                                                            <span class="booking-form__error-message text-input">
                                                            </span>
                                                        </div>
                                                        <div class="booking-form__datetime-group row">
                                                            <div class="col l-6 m-6 c-12 booking-form__date-field js-modal_form-group">
                                                                <label for="booking-form__date-input" class="booking-form__date-label">Ngày đặt hẹn</label>
                                                                <input type="date" name="date" class="booking-form__date-input" id="booking-form__date-input">
                                                                <span class="booking-form__error-message text-input">
                                                                </span>
                                                            </div>
                                                            <div class="col l-6 m-6 c-12 booking-form__time-field js-modal_form-group">
                                                                <label for="booking-form__time-input" class="booking-form__time-label">Thời gian</label>
                                                                <input type="time" name="time"  class="booking-form__time-input" id="booking-form__time-input">
                                                                <span class="booking-form__error-message text-input">
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div class="booking-form__slt-group">
                                                            <label for="booking-form__time-input" class="booking-form__time-label">Chọn bệnh viện</label>
                                                            <select name="hospital" id="" class="booking-form__slt-list">
                                                                <option value="">Bệnh viện Mắt Sài Gòn Hà Nội (77 Nguyễn Du)</option>
                                                                <option value="">Bệnh viện Mắt Sài Gòn Hà Nội I (532 đường Láng)</option>
                                                                <option value="">Bệnh viện Mắt Sài Gòn Vinh (Đại lộ V.I Lê Nin)</option>
                                                                <option value="">Bệnh viện Mắt Sài Gòn Nha Trang (KDC Cầu Dứa, Đường 23/10)</option>
                                                            </select>
                                                        </div>
                                                        <div class="form__des-field">
                                                            <label for="form__des-input" class="form__des-label">Mô tả triệu chứng/lý do khám</label>
                                                            <textarea type="text" rows="4" name="symptom" id="form__des-input" class="form__des-input"></textarea>
                                                        </div>
                                                        <button type="submit" class="btn modal__btn">
                                                            Đặt lịch hẹn
                                                            <i class="fas fa-calendar-alt"></i>
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="modal__booking-form modal__consultant-booking-form">
                                    <div class="grid">
                                        <div class="row consulting-form-row">
                                            <div class="col l-5 m-5 c-12">
                                                <div class="modal__notes">
                                                    <h2 class="notes__heading">
                                                        Lưu ý:
                                                    </h2>
                                                    <ul class="notes__list">
                                                        <li class="notes__item">
                                                            Quý khách có các thắc mắc liên quan đến phương pháp điều trị, chính sách ưu đãi, biểu phí, hình thức thanh toán vui lòng để lại thông tin và Mắt Sài Gòn sẽ liên hệ lại, hoặc Quý khách có thể gọi đến tổng đài 1900555553 để được hỗ trợ. Cảm ơn Quý khách.
                                                        </li>
                                                    </ul>
                                                    <div class="service-item">
                                                        <a href="tel:0963075062" class="service-item__link">
                                                            <img src="../assets/img/phone.png" alt="" class="service-img">
                                                            <span class="service-name">Hotline: 0963075062</span>
                                                            <i class="fas fa-chevron-right service-icon"></i>
                                                        </a>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="col l-7 m-7 c-12">
                                                <div class="modal__form-container">
                                                    
                                                    <i class="ti-close"></i>
                                                    <h2 class="form__heading">
                                                        ĐĂNG KÝ NHẬN TƯ VẤN
                                                    </h2>

                                                    <form action="" class="modal__form">
                                                        <div class="form__name-field">
                                                            <label for="form__name-input" class="form__name-label">Họ tên</label>
                                                            <input type="text" name="" id="form__name-input" class="form__name-input">
                                                        </div>
                                                        <div class="form__phone-field">
                                                            <label for="form__phone-input" class="form__phone-label">Số điện thoại</label>
                                                            <input type="text" name="" id="form__phone-input" class="form__phone-input">
                                                        </div>
                                                        <div class="form__email-field">
                                                            <label for="form__email-input" class="form__email-label">Email</label>
                                                            <input type="text" name="" id="form__email-input" class="form__email-input">
                                                        </div>
                                                        <div class="form__des-field">
                                                            <label for="form__des-input" class="form__des-label">Nội dung cần tư vấn</label>
                                                            <textarea type="text" rows="4" name="" id="form__des-input" class="form__des-input">

                                                            </textarea>
                                                        </div>
                                                        <div class="btn modal__btn">
                                                            Nhận tư vấn
                                                            <i class="fas fa-comment-alt"></i>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="modal__video-container">
                                    <i class="ti-close"></i>
                                    <iframe width="800" height="450" src="https://www.youtube.com/embed/PIwlM9oJyCo" class="modal__video" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>`
}