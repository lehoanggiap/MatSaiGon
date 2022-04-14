import { Page } from "./page.js";
import {content_container, pagination} from './constant/healthyeyes.js'

let contents = [
    {
        'image': '../assets/img/bac-si-ket.jpg',                           
        'header': 'BÍ QUYẾT BẢO VỆ ĐÔI MẮT SÁNG KHỎE KHI HỌC TRỰC TUYẾN',
        'des': 'Trong thời gian học tập trực tuyến, việc chăm chú nhìn màn hình thiết bị điện tử có thể khiến các em học sinh suy'
    },
    {
        'image': '../assets/img/bac-si-ket.jpg',                           
        'header': 'BÍ QUYẾT BẢO VỆ ĐÔI MẮT SÁNG KHỎE KHI HỌC TRỰC TUYẾN',
        'des': 'Trong thời gian học tập trực tuyến, việc chăm chú nhìn màn hình thiết bị điện tử có thể khiến các em học sinh suy'
    },
    {
        'image': '../assets/img/bac-si-ket.jpg',                           
        'header': 'BÍ QUYẾT BẢO VỆ ĐÔI MẮT SÁNG KHỎE KHI HỌC TRỰC TUYẾN',
        'des': 'Trong thời gian học tập trực tuyến, việc chăm chú nhìn màn hình thiết bị điện tử có thể khiến các em học sinh suy'
    },
    {
        'image': '../assets/img/bac-si-ket.jpg',                           
        'header': 'BÍ QUYẾT BẢO VỆ ĐÔI MẮT SÁNG KHỎE KHI HỌC TRỰC TUYẾN',
        'des': 'Trong thời gian học tập trực tuyến, việc chăm chú nhìn màn hình thiết bị điện tử có thể khiến các em học sinh suy'
    },
    {
        'image': '../assets/img/bac-si-ket.jpg',                           
        'header': 'BÍ QUYẾT BẢO VỆ ĐÔI MẮT SÁNG KHỎE KHI HỌC TRỰC TUYẾN',
        'des': 'Trong thời gian học tập trực tuyến, việc chăm chú nhìn màn hình thiết bị điện tử có thể khiến các em học sinh suy'
    },
    {
        'image': '../assets/img/bac-si-ket.jpg',                           
        'header': 'BÍ QUYẾT BẢO VỆ ĐÔI MẮT SÁNG KHỎE KHI HỌC TRỰC TUYẾN',
        'des': 'Trong thời gian học tập trực tuyến, việc chăm chú nhìn màn hình thiết bị điện tử có thể khiến các em học sinh suy'
    },
    {
        'image': '../assets/img/bac-si-ket.jpg',                           
        'header': 'BÍ QUYẾT BẢO VỆ ĐÔI MẮT SÁNG KHỎE KHI HỌC TRỰC TUYẾN',
        'des': 'Trong thời gian học tập trực tuyến, việc chăm chú nhìn màn hình thiết bị điện tử có thể khiến các em học sinh suy'
    },
    {
        'image': '../assets/img/bac-si-ket.jpg',                           
        'header': 'BÍ QUYẾT BẢO VỆ ĐÔI MẮT SÁNG KHỎE KHI HỌC TRỰC TUYẾN',
        'des': 'Trong thời gian học tập trực tuyến, việc chăm chú nhìn màn hình thiết bị điện tử có thể khiến các em học sinh suy'
    },
    {
        'image': '../assets/img/bac-si-ket.jpg',                           
        'header': 'BÍ QUYẾT BẢO VỆ ĐÔI MẮT SÁNG KHỎE KHI HỌC TRỰC TUYẾN',
        'des': 'Trong thời gian học tập trực tuyến, việc chăm chú nhìn màn hình thiết bị điện tử có thể khiến các em học sinh suy'
    },
    {
        'image': '../assets/img/bac-si-ket.jpg',                           
        'header': 'BÍ QUYẾT BẢO VỆ ĐÔI MẮT SÁNG KHỎE KHI HỌC TRỰC TUYẾN',
        'des': 'Trong thời gian học tập trực tuyến, việc chăm chú nhìn màn hình thiết bị điện tử có thể khiến các em học sinh suy'
    },
    {
        'image': '../assets/img/bac-si-ket.jpg',                           
        'header': 'BÍ QUYẾT BẢO VỆ ĐÔI MẮT SÁNG KHỎE KHI HỌC TRỰC TUYẾN',
        'des': 'Trong thời gian học tập trực tuyến, việc chăm chú nhìn màn hình thiết bị điện tử có thể khiến các em học sinh suy'
    },
    {
        'image': '../assets/img/bac-si-ket.jpg',                           
        'header': 'BÍ QUYẾT BẢO VỆ ĐÔI MẮT SÁNG KHỎE KHI HỌC TRỰC TUYẾN',
        'des': 'Trong thời gian học tập trực tuyến, việc chăm chú nhìn màn hình thiết bị điện tử có thể khiến các em học sinh suy'
    },
    {
        'image': '../assets/img/bac-si-ket.jpg',                           
        'header': 'BÍ QUYẾT BẢO VỆ ĐÔI MẮT SÁNG KHỎE KHI HỌC TRỰC TUYẾN',
        'des': 'Trong thời gian học tập trực tuyến, việc chăm chú nhìn màn hình thiết bị điện tử có thể khiến các em học sinh suy'
    },
    {
        'image': '../assets/img/bac-si-ket.jpg',                           
        'header': 'BÍ QUYẾT BẢO VỆ ĐÔI MẮT SÁNG KHỎE KHI HỌC TRỰC TUYẾN',
        'des': 'Trong thời gian học tập trực tuyến, việc chăm chú nhìn màn hình thiết bị điện tử có thể khiến các em học sinh suy'
    },
    {
        'image': '../assets/img/bac-si-ket.jpg',                           
        'header': 'BÍ QUYẾT BẢO VỆ ĐÔI MẮT SÁNG KHỎE KHI HỌC TRỰC TUYẾN',
        'des': 'Trong thời gian học tập trực tuyến, việc chăm chú nhìn màn hình thiết bị điện tử có thể khiến các em học sinh suy'
    },
    {
        'image': '../assets/img/bac-si-ket.jpg',                           
        'header': 'BÍ QUYẾT BẢO VỆ ĐÔI MẮT SÁNG KHỎE KHI HỌC TRỰC TUYẾN',
        'des': 'Trong thời gian học tập trực tuyến, việc chăm chú nhìn màn hình thiết bị điện tử có thể khiến các em học sinh suy'
    }
]

let max_content = 1
let start = 0
let end = max_content

let maxShow = 4 
let len = contents.length
let numberBtns =  Math.ceil(len/max_content)



function renderContent(){
    const htmls = contents.map((content) => {
        return `<div class="col l-6 m-12 c-12">
                    <div class="content-item">
                        <div class="content-img">
                            <img src=${content.image} alt="">
                        </div>
    
                        <div class="content-infor">
                            <a class="content-heading" href="#">
                                ${content.header}
                            </a>
                            <p class="content-des">
                                ${content.des}
                            </p>
                            <a href="#" class="content-detail">
                                Xem chi tiết >>
                            </a>
                        </div>
                    </div>
                </div>`
    })
    return htmls
}

function renderPagination(){
    let htmls = ''
    for(let i = start; i < numberBtns; i++){
        htmls += `<a href="#" class="pagination_btn ${i == start ? 'active':''}">${i+1}</a>`
        if(i === start || i === numberBtns - 2){
            htmls += `<span class ='pagination_dot'>...</span>`
        }
    }
    return htmls
}


function loadContent(start, end){
    Array.from(content_container.children).forEach(function(content,index){
        if(index >= start && index < end){
            content.style.display = 'block'
        }else{
            content.style.display = 'none'

        }
    })
}

content_container.innerHTML = renderContent().join('')
pagination.innerHTML = renderPagination()
let pagination_btns = pagination.querySelectorAll('.pagination_btn')
showPagination(start)

function showPagination(index){
    let dots = pagination.querySelectorAll('.pagination_dot')
    if(numberBtns > maxShow){
        dots[1].style.display = 'block'
        if(index < maxShow){
            dots[0].style.display = 'none'
            dots[1].style.display = 'block'
            Array.from(pagination_btns).forEach(function(page,i){
                if(i <= index + 2 || i == numberBtns - 1){
                    page.style.display = 'block'
                }else{
                    page.style.display = 'none'
                }
            })
        }else if(index >= numberBtns - maxShow){
            dots[1].style.display = 'none'
            dots[0].style.display = 'block'
            Array.from(pagination_btns).forEach(function(page,i){
                if(i >= index - 2  || i == 0){
                    page.style.display = 'block'
                }else{
                    page.style.display = 'none'
                }
            })
        }else if(index >= maxShow && index < numberBtns - maxShow){
            dots[1].style.display = 'block'
            dots[0].style.display = 'block'
            Array.from(pagination_btns).forEach(function(page,i){
                if(i >= index - 2 && i <= index + 2 || i == 0 || i == numberBtns - 1){
                    page.style.display = 'block'
                }else{
                    page.style.display = 'none'
                }
            })
        }
    }
    
}


Array.from(pagination_btns).forEach(function(page, index){
    page.onclick = function(e){
        e.preventDefault();
        let activeBtn = pagination.querySelector('.active')
        activeBtn.classList.remove('active') 
        this.classList.add('active')
        end = (index+1)*max_content
        start = end - max_content
        showPagination(index)
        loadContent(start, end)
    }
})

showPagination(start)

loadContent(start, end)




class introPage extends Page{

    constructor(){
        super();
    }

    handleEvents(){
        super.handleEvents();

    }

    start(){
        super.start()
    }
}

let intropage = new introPage();
intropage.start();