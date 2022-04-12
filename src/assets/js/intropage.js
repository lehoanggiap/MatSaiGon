import { Page } from "./page.js";
import {timeline, timeline_items, timeline_links, timeline_brief} from './constant/introduction.js'
   

const timelines = [
    {
        'time': '2004',
        'brief': 'Thành lập'
    },
    {
        'time': '2006',
        'brief': 'Sửa chữa'
    },
    {
        'time': '2017',
        'brief': 'Dỡ bỏ'
    },
    {
        'time': '2020',
        'brief': 'Xây mới'
    }
]

class introPage extends Page{
    constructor(){
        super();
    }

    handleEvents(){
        super.handleEvents();
        
        for(let link of timeline_links){
            link.onclick = function(e){
                e.preventDefault();
                
            }
        }

        Array.from(timeline_items).forEach((item,index) => {
            item.onclick = function(e){
                let activeitem = timeline.querySelector('.timeline_item.active')
                activeitem.classList.remove('active')
                this.classList.add('active')
                timeline_brief.innerHTML = `<h2>${timelines[index]['time']}</h2>
                                            <p>${timelines[index]['brief']}</p>`
            }
        })
    }

    start(){
        super.start()
    }
}

let intropage = new introPage();
intropage.start();


