import { Page } from "./page.js";
import {content_container, pagination} from './constant/healthyeyes.js'


let max_content = 2
let start = 0
let end = 2

function loadContent(start, end){
    let acitve_content = content_container.querySelectorAll('.content-item.active')
    Array.from(acitve_content).forEach(function(content){
        content.classList.remove('active')
    })

    for(let i = start; i < end; i++){
        let content = content_container.children[i].querySelector('.content-item')
        if(content){
            content.classList.add('active')
        }
    }
}


Array.from(pagination.children).forEach(function(page, index){
    page.onclick = function(e){
        e.preventDefault();
        let activeBtn = pagination.querySelector('.active')
        activeBtn.classList.remove('active') 
        this.classList.add('active')
        end = (index+1)*max_content
        start = end - max_content
        loadContent(start, end)
    }
})

window.onscroll = function(e){
    // console.log(e)
}



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