export class handleDate{
    constructor(){

    }

    static getDateFromNow(n){
        let today = new Date()
        let dayMilliseconds = 1000 * 60 * 60 * 24; 
        return today.getTime() + n*dayMilliseconds
    }

    static parseDate(miliseconds){
        let date = new Date(miliseconds);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }
}