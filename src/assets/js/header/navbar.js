import {header,header_cIcon,header_mIcon, header_navbar} from '../constant/index.js'

class navBar{

    handleEvents(){
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

        function calcHeight(navbar_list){
            let res = 0
            Array.from(navbar_list.children).forEach(function(menu_item){
                let subnav = menu_item.querySelector('ul[class*="navbar"]')
                let subnavHeight = 0
                if(subnav){
                    subnavHeight = subnav.getBoundingClientRect().height
                }
                let itemHeight = menu_item.getBoundingClientRect().height
                res += itemHeight - subnavHeight
            })
            return res;
        }

        function setmIconClick(mIcon, navbar_list, cIcon){
            mIcon.onclick = function(){
                navbar_list.style.display = 'block';
                navbar_list.style.height = calcHeight(navbar_list) + 'px'
                cIcon.style.display = 'block'
                mIcon.style.display = 'none'
            }
        }

        function setcIconClick(cIcon, navbar_list, mIcon) {
            cIcon.onclick = function(){
                navbar_list.style.height = 0
                setTimeout(function(){
                    navbar_list.style.display = 'none';
                }, 300)
                mIcon.style.display = 'block'
                cIcon.style.display = 'none'
            }
        }

        function resetOnResize(cIcon, navbar_list, mIcon, options){
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
                    resetOnResize(cIcon, subnav, mIcon, options)
                }
            })
        }

        window.onresize = function(){
            let react = document.documentElement.getBoundingClientRect();
            let docWidth = react.width
            if(docWidth > 1024){
                resetOnResize(header_cIcon, header_navbar, header_mIcon, optionsL)
            }else{
                resetOnResize(header_cIcon, header_navbar, header_mIcon, optionsMS)
            }
        }

        function subNavBarHanlde(navbar_list){
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

                    setmIconClick(mIcon, subnav, cIcon)
                    setcIconClick(cIcon, subnav, mIcon)

                    subNavBarHanlde(subnav)
                }
            })
        }  
        
        setmIconClick(header_mIcon, header_navbar, header_cIcon)
        setcIconClick(header_cIcon, header_navbar, header_mIcon)
        subNavBarHanlde(header_navbar)

        
    }

    create(){
        this.handleEvents()
    }
}

navBar = new navBar();
navBar.create();

export {navBar}