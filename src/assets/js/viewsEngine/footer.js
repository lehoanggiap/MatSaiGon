import { footer } from "../constant/page.js";

export function getFooter(){
    footer.innerHTML += `<div class="footer-layout1">
                            <div class="grid wide">
                                <div class="row me-gutter footer-layout1__row">
                                    <div class="col l-4 c-10 c-o-1 m-4 m-o-0">
                                        <p class="license-infor">
                                            Bệnh viện Mắt Sài Gòn - MST : 0302745714 - Cấp ngày 18/10/2002 bởi Sở Kế Hoạch và Đầu Tư TP.HCM Bệnh viện Mắt Sài Gòn - Giấy phép hoạt động số 73/BYT/GPHD 0302745714 - Cấp ngày 25/12/2013 bởi Bộ Y Tế
                                        </p>
                                        <div class="license-img-container">
                                            <img class="license-img" src="../assets/img/bocongthuong.png" alt="">
                                            <img class="license-img" src="../assets/img/dcma.png" alt="">
                                        </div>
                                    </div>
                                    <div class="col l-3 c-0 m-4">
                                        <div class="footer-content-section">
                                            <h2 class="footer-content-section__heading">
                                                Dịch vụ
                                            </h2>

                                            <ul class="footer-content__list">
                                                <li class="footer-content__item">
                                                    <a href="#" class="footer-content__link">Khám mắt</a>
                                                </li>
                                                <li class="footer-content__item">
                                                    <a href="#" class="footer-content__link">Phẫu thuật khúc xạ</a>
                                                </li>
                                                <li class="footer-content__item">
                                                    <a href="#" class="footer-content__link">Điều trị tật khúc xạ</a>
                                                </li>
                                                <li class="footer-content__item">
                                                    <a href="#" class="footer-content__link">Phẫu thuật cườm khô Phaco</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col l-2 c-0 m-4">
                                        <div class="footer-content-section">
                                            <h2 class="footer-content-section__heading">
                                                Về chúng tôi
                                            </h2>
                                            <ul class="footer-content__list">
                                                <li class="footer-content__item">
                                                    <a href="#" class="footer-content__link">Hệ thống</a>
                                                </li>
                                                <li class="footer-content__item">
                                                    <a href="#" class="footer-content__link">Đội ngũ bác sĩ</a>
                                                </li>
                                                <li class="footer-content__item">
                                                    <a href="#" class="footer-content__link">Tin tức</a>
                                                </li>
                                                <li class="footer-content__item">
                                                    <a href="#" class="footer-content__link">Khuyến mại</a>
                                                </li>
                                                <li class="footer-content__item">
                                                    <a href="#" class="footer-content__link">Trang thiết bị</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col l-3 c-10 c-o-1 m-4 m-o-0">
                                        <div class="footer-content-section">
                                            <h2 class="footer-content-section__heading">
                                                Liên hệ
                                            </h2>

                                            <ul class="footer-content__list">
                                                <li class="footer-content__item">
                                                    <a href="tel:1900555553" class="footer-content__link">
                                                        <i class="fas fa-phone"></i>
                                                        1900555553
                                                    </a>
                                                </li>
                                                <li class="footer-content__item">
                                                    <a href="mailto:info@matsaigon.com" class="footer-content__link">
                                                        <i class="fas fa-envelope"></i>
                                                        info@matsaigon.com
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="footer-layout2">
                            <div class="grid wide">
                                <div class="row me-gutter footer-layout2__row">
                                    <div class="col l-5 m-12 c-12">
                                        <p class="socials-contact">
                                            Theo dõi tin tức và dịch vụ mới nhất của chúng tôi!
                                            <a href="#">
                                                <i class="fab fa-facebook-f"></i>
                                            </a>
                                            <a href="#">
                                                <i class="fab fa-youtube"></i>
                                            </a>
                                        </p>
                                    </div>
                                    <div class="col l-7 m-12 c-12">
                                        <form class="update-infor">
                                        Cập nhật thông tin mới nhất
                                        <div class="update-infor__input">
                                            <input type="email" required placeholder="nhập email của bạn">
                                            <input type="submit" value="ĐĂNG KÝ!">
                                        </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="footer-layout3">
                            <p>
                                © Bệnh viện Mắt Sài Gòn 2020. <br>
                                Tất cả những thông tin trên chỉ mang tính chất tham khảo, bệnh nhân phải đến trực tiếp bệnh viện khám để bác sĩ chẩn đoán và điều trị.
                            </p>
                        </div>`
}