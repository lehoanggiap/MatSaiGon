import { header } from "../constant/page.js";

export function getHeader(){
    header.innerHTML += `<div class="grid wide header__container">
                            <div class="row">
                                <div class="col l-2 m-12 c-12 header__logo-block">
                                    <a href="./homepage.html" class="header__logo-link">
                                        <img src="../assets/img/main-logo.png" alt="" class="header__image">
                                    </a>
                                    <i class="ti-menu header__menu-icon"></i>
                                    <i class="ti-close header__menu-icon"></i>
                                </div>

                                <div class="col l-8 m-12 c-12 header__navbar-block">
                                    <nav class="header__navbar-list">
                                        <li class="header__navbar-item">
                                            <a href="./homepage.html" class="header__navbar-link">Trang chủ</a>
                                        </li>
                                        <li class="header__navbar-item">
                                            <a href="#" class="header__navbar-link">
                                                Về chúng tôi
                                            </a>
                                            <ul class="header__sub-navbar">
                                                <li class="header__sub-navbar-item">
                                                    <a href="./introPage.html" class="header__sub-navbar-link">Giới thiệu chung</a>
                                                </li>
                                                <li class="header__sub-navbar-item">
                                                    <a href="#" class="header__sub-navbar-link">Hệ thống bệnh viện</a>
                                                </li>
                                                <li class="header__sub-navbar-item">
                                                    <a href="#" class="header__sub-navbar-link">Đội ngũ bác sĩ</a>
                                                </li>
                                                <li class="header__sub-navbar-item">
                                                    <a href="#" class="header__sub-navbar-link">Trang thiết bị</a>
                                                </li>
                                                <li class="header__sub-navbar-item">
                                                    <a href="#" class="header__sub-navbar-link">Tuyển dụng</a>
                                                </li>
                                                <li class="header__sub-navbar-item">
                                                    <a href="#" class="header__sub-navbar-link">Thư viện hình & video</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="header__navbar-item">
                                            <a href="#" class="header__navbar-link">Dịch vụ</a>
                                            <ul class="header__sub-navbar">
                                                <li class="header__sub-navbar-item">
                                                    <a href="#" class="header__sub-navbar-link">Khám mắt</a>
                                                </li>
                                                <li class="header__sub-navbar-item">
                                                    <a href="#" class="header__sub-navbar-link">Điều trị tật khúc xạ</a>
                                                </li>
                                                <li class="header__sub-navbar-item">
                                                    <a href="#" class="header__sub-navbar-link">Phẫu thuật tật khúc xạ</a>
                                                </li>
                                                <li class="header__sub-navbar-item">
                                                    <a href="#" class="header__sub-navbar-link">Phẫu thuật cườm khô PHACO</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="header__navbar-item">
                                            <a href="#" class="header__navbar-link">Bệnh về mắt</a>
                                            <ul class="header__sub-navbar">
                                                <li class="header__sub-navbar-item">
                                                    <a href="#" class="header__sub-navbar-link">Các tật khúc xạ</a>
                                                </li>
                                                <li class="header__sub-navbar-item">
                                                    <a href="#" class="header__sub-navbar-link">Đục thủy tinh thể</a>
                                                </li>
                                                <li class="header__sub-navbar-item">
                                                    <a href="#" class="header__sub-navbar-link">Lé mắt</a>
                                                </li>
                                                <li class="header__sub-navbar-item">
                                                    <a href="#" class="header__sub-navbar-link">Cườm nước</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="header__navbar-item">
                                            <a href="#" class="header__navbar-link">Hướng dẫn khách hàng</a>
                                            <ul class="header__sub-navbar">
                                                <li class="header__sub-navbar-item">
                                                    <a href="#" class="header__sub-navbar-link">Bí quyết mắt khỏe</a>
                                                </li>
                                                <li class="header__sub-navbar-item">
                                                    <a href="#" class="header__sub-navbar-link">Thông tin bảo hiểm</a>
                                                </li>
                                                <li class="header__sub-navbar-item">
                                                    <a href="#" class="header__sub-navbar-link">Hướng dẫn thanh toán</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="header__navbar-item">
                                            <a href="#" class="header__navbar-link">Tin tức</a>
                                            <ul class="header__sub-navbar">
                                                <li class="header__sub-navbar-item">
                                                    <a href="#" class="header__sub-navbar-link">Tin khuyến mại</a>
                                                </li>
                                                <li class="header__sub-navbar-item">
                                                    <a href="#" class="header__sub-navbar-link">Tin truyền thông</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </nav>
                                </div>

                                <div class="col l-2">
                                    <a href="#" class="btn header__btn">Đặt lịch khám</a>
                                </div>

                            </div>
                        </div>`
}