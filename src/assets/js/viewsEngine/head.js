import {head} from '../constant/page.js'

export function getHead(title){
    head.innerHTML += `<title>${title}</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
        <link rel="stylesheet" href="../assets/fonts/fontawesome-free-5.15.4-web/css/all.min.css">
        <link rel="stylesheet" href="../assets/fonts/themify-icons/themify-icons.css">
        <link rel="stylesheet" href="../assets/css/reset.css">
        <link rel="stylesheet" href="../assets/css/grid.css">
        <link rel="stylesheet" href="../assets/css/base.css">
        <link rel="stylesheet" href="../assets/css/responsive.css">
        <link href="https://fonts.googleapis.com/css2?family=Asap:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
        <link rel="icon" href="https://www.matsaigon.com/wp-content/uploads/cropped-favicon-32x32.png" sizes="32x32" />`
}
