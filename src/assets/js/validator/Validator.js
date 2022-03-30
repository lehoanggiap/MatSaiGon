function Validator(options){

}


Validator.isRequired = function(selector, message){
    return {
        selector: selector,
        test: function(value){
            return value? undefined : message || 'Vui lòng nhập trường này'
        }
    };
}

Validator.isEmail = function(selector, message){
    return {
        selector: selector,
        test: function(value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Trường này phải là email' 
        }
    };
}

Validator.minLength = function(selector, min){
    return{
        selector: selector,
        test: function(value){
            return value.length >= min? undefined: `Vui lòng nhập tối thiểu ${min} ký tự`
        }
    }
}

Validator.isConfirmed = function(selector, getConfirmValue, message){
    return{
        selector: selector,
        test: function(value){
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác'
        }
    }
}

export {Validator}