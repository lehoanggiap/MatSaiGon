import {header_cIcon,header_mIcon, header_navbar} from '../constant/index.js'

class navBar{
    //Tính height của header để có thể set overflow bằng hidden, height phải mặc định
    //Có thể set max height, tuy nhiên khi height là 100% thì animation có vấn đề
    calcHeight(navbar_list){
        let res = 0
        Array.from(navbar_list.children).forEach(function(menu_item){
            let itemHeight = menu_item.getBoundingClientRect().height
            res += itemHeight
        })
        return res;
    } 
    
    //set sự kiện cho icon menu/ icon + đối với navbar con
    //nếu có nav cha thì set cho nó có height auto, nếu không thì sẽ gặp lỗi khi mở lại, chiều cao của 
    //th outer nav sẽ bị set cố định lại theo chiều cao đc cộng thêm
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
    
    //set sự kiện cho icon close, set height về 0
    setcIconClick(app, cIcon, outernav, navbar_list, mIcon){
        cIcon.onclick = function(){
            if(navbar_list.style.height == 'auto'){
                navbar_list.style.height = app.calcHeight(navbar_list) + 'px'
                setTimeout(function(){
                    navbar_list.style.height = 0
                }, 5)
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

    //trả về các giá trị mặc định ban đầu khi ở màn hình lớn/nhỏ
    //màn lớn: các icon display none, phải làm v vì set style inline cho nó
    //màn nhỏ: thì hiện lên
    //sử dụng đệ quy để set cho sub nav
    resetOnResize(app, cIcon, navbar_list, mIcon, options){

        navbar_list.style.height = options.navbar_list.height;
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
                
                subnav.style.display = 'none'
                setTimeout(function() {
                    subnav.style.display = 'block'
                }, 100) //lúc back về màn lớn/ nếu k set display none thì nó chạy cái animation

                app.resetOnResize(app, cIcon, subnav, mIcon, options)
            }
        })
    }

    //thêm icon plus/icon minus cho subnav. Sử dụng đệ quy
    subNavBarHanlde(app, navbar_list){
        if(navbar_list.children.length <= 0){
            return;
        }
        Array.from(navbar_list.children).forEach(function(menu_item){
            let subnav = menu_item.querySelector('ul[class*="navbar"]')
            if(subnav){
                let navlink = menu_item.querySelector('a[class*="navbar-link"]')
                // navlink.onclick = function(e){
                //     e.preventDefault()
                // }
                navlink.innerHTML += `<i class="ti-plus"></i><i class="ti-minus"></i>`

                let mIcon = navlink.querySelector('.ti-plus')
                let cIcon = navlink.querySelector('.ti-minus')

                app.setmIconClick(app, mIcon, navbar_list, subnav, cIcon)
                app.setcIconClick(app, cIcon, navbar_list, subnav, mIcon)

                app.subNavBarHanlde(app, subnav)
            }
        })
    }  


    resetOriginalState(){
        //Tối ưu code, thêm style inline vào khi vừa khởi tạo 
        const optionsL = {
            navbar_list: {
                height: 'unset',
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