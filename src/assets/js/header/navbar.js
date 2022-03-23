import {header,header_cIcon,header_mIcon, header_navbar} from '../constant/index.js'

class navBar{

    calcHeight(navbar_list){
        let res = 0
        Array.from(navbar_list.children).forEach(function(menu_item){
            let itemHeight = menu_item.getBoundingClientRect().height
            res += itemHeight
        })
        return res;
    }

    setmIconClick(app, mIcon, outernav , navbar_list, cIcon){
        mIcon.onclick = function(){
            let height = app.calcHeight(navbar_list) + 'px'
            navbar_list.style.height = height
            
            if(outernav){
                outernav.style.height = 'auto'
            }else{
                navbar_list.style.height = height
            }

            cIcon.style.display = 'block'
            mIcon.style.display = 'none'
        }
    }

    setcIconClick(app, cIcon, outernav, navbar_list, mIcon){
        cIcon.onclick = function(){
            if(navbar_list.style.height == 'auto'){
                navbar_list.style.height = app.calcHeight(navbar_list) + 'px'
                setTimeout(function(){
                    navbar_list.style.height = 0
                }, 50)
            }else{
                navbar_list.style.height = 0
                if(outernav){
                    outernav.style.height = 'auto'
                }
            }
            mIcon.style.display = 'block'
            cIcon.style.display = 'none'
            
        }
    }

    resetOnResize(app, cIcon, navbar_list, mIcon, options){
        navbar_list.style.height = options.navbar_list.height;
        navbar_list.style.display = options.navbar_list.display;
        mIcon.style.display = options.mIcon.display;
        cIcon.style.display = options.cIcon.display;

        if(navbar_list.children.length <= 0){
            return;
        }
        Array.from(navbar_list.children).forEach(function(menu_item){
            let subnav = menu_item.querySelector('ul[class*="navbar"]')
            if(subnav){
                let navlink = menu_item.querySelector('a[class*="navbar-link"]')
                let mIcon = navlink.querySelector('.ti-plus')
                let cIcon = navlink.querySelector('.ti-minus')
                app.resetOnResize(app, cIcon, subnav, mIcon, options)
            }
        })
    }

    subNavBarHanlde(app, navbar_list){
        if(navbar_list.children.length <= 0){
            return;
        }
        Array.from(navbar_list.children).forEach(function(menu_item){
            let subnav = menu_item.querySelector('ul[class*="navbar"]')
            if(subnav){
                let navlink = menu_item.querySelector('a[class*="navbar-link"]')
                navlink.onclick = function(e){
                    e.preventDefault()
                }
                navlink.innerHTML += `<i class="ti-plus"></i><i class="ti-minus"></i>`

                let mIcon = navlink.querySelector('.ti-plus')
                let cIcon = navlink.querySelector('.ti-minus')

                app.setmIconClick(app, mIcon, navbar_list, subnav, cIcon)
                app.setcIconClick(app, cIcon, navbar_list, subnav, mIcon)

                app.subNavBarHanlde(app, subnav)
            }
        })
    }  


    handleEvents(){
        
        
    }

    resetOriginalState(){
        const optionsL = {
            navbar_list: {
                height: 'unset',
                display: 'block'
            }, 
            mIcon:{
                display: 'none',
            }, 
            cIcon:{
                display: 'none'
            }
        }

        const optionsMS = {
            navbar_list: {
                height: 0,
                display: 'none'
            }, 
            mIcon:{
                display: 'block',
            }, 
            cIcon:{
                display: 'none'
            }
        }

        let docWidth = window.innerWidth
        if(docWidth > 1024){
            this.resetOnResize(this, header_cIcon, header_navbar, header_mIcon, optionsL)
        }else{
            this.resetOnResize(this, header_cIcon, header_navbar, header_mIcon, optionsMS)
        }
    }

    create(){
        const app = this
        this.setmIconClick(app, header_mIcon, null, header_navbar, header_cIcon)
        this.setcIconClick(app, header_cIcon, null, header_navbar, header_mIcon)
        this.subNavBarHanlde(app, header_navbar)
    }
}

export {navBar}