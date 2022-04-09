import {body} from './constant/page.js'
import {getHeader} from './viewsEngine/index.js'

export function loadPage(jsFile) {
    Promise.resolve().then(function(){
        getHeader()
    })
    .then(function(){
        let newScript = document.createElement('script')
        newScript.type = "module"
        newScript.src = `../assets/js/${jsFile}`

        body.appendChild(newScript)
    })
}
