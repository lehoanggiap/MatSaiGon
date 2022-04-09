import {header} from './constant/page.js'
import {navBar} from './header/index.js';
import {$$} from './constant/page.js'


const header_cIcon = header.querySelector('.ti-close');
const header_mIcon = header.querySelector('.ti-menu');
const header_navbar = header.querySelector('.header__navbar-list')


export class Page{
    navBar = new navBar(header_cIcon,header_mIcon, header_navbar);
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
        this.handleEvents()
    }

}