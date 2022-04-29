export class handleDate{
    constructor(){

    }

    static getDateFromNow(n){
        let today = new Date()
        let dayMilliseconds = 1000 * 60 * 60 * 24
        let substract = today.getTime()%dayMilliseconds
        return (today.getTime() - substract) + n*dayMilliseconds
    }

    static parseDate(miliseconds){
        let date = new Date(miliseconds);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }
}