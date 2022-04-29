import {$} from '../constant/index.js'
import {handleDate} from '../date/index.js'
function Validator(options){

    let formElement = $(options.form)
    function getParent(element, selector){
        while(element.parentElement){
            if(element.parentElement.matches(selector)){ 
                return element.parentElement;
            }
            element = element.parentElement; 
        }
    }
    let submitBtn = formElement.querySelector(options.submitBtn)
    var timeOut = 0
    if(formElement){
        
        formElement.onsubmit = function(e){
            e.preventDefault();
            var validateRule = true;
            for(let rule of options.rules){
                var formValues = {}
                if(validateRule){
                    let inputElements = formElement.querySelectorAll(rule.selector)
                    Array.from(inputElements).forEach(inputElement => {
                        if(validateRule){
                            if(inputElement){
                                var errorMessage = ''
                                switch(inputElement.type){
                                    case 'radio':
                                    case 'checkbox':
                                        errorMessage = rule.test(
                                            formElement.querySelector(rule.selector + ":checked")
                                        );
                                        break;
                                    case 'date':
                                        errorMessage = rule.test(inputElement)
                                        break;    
                                    default:
                                        errorMessage = rule.test(inputElement.value); 
                                }
                                if(errorMessage){
                                    var formGroup = getParent(inputElement, options.formGroupSelector)
                                    var errorElement = formGroup.querySelector(options.errorSelector)
                                    errorElement.innerHTML = `<i class="fas fa-exclamation-triangle"></i>
                                                              ${errorMessage}`  
                                    
                                    setTimeout(function () {
                                        errorElement.classList.add('active');
                                    },1)
                                    
                                    timeOut = setTimeout(function(){
                                        errorElement.classList.remove('active');
                                    }, 3000)  
                                                          
                                    validateRule = false;
                                }
                            }
                        }
                    })
                }else{
                    break;
                }  
            }

            var enableInputs = formElement.querySelectorAll('[name]:not([disabled])')

            if(validateRule){
                if(typeof options.onSubmit === 'function'){
                    var formValues = Array.from(enableInputs).reduce((values, input)=>{
                        switch(input.type){
                            case 'radio':
                                if(input.matches(':checked')){
                                    values[input.name] = formElement.querySelector('input[name = "'+ input.name +'"]').value
                                }
                                break;
                            case 'checkbox':  
                                if(!input.matches(':checked')) {
                                    values[input.name] = '';
                                    return values; 
                                }
                                
                                
                                if(!Array.isArray(values[input.name])){
                                    values[input.name] = [];
                                }

                                values[input.name].push(input.value);
                                break;    
                            
                            case 'select-one':
                                values[input.name] = input.options[input.selectedIndex].text; 
                                break; 

                            default:
                                values[input.name] = input.value
                        }

                        return values;
                    }, {})
                    options.onSubmit(formValues).then(() => {
                        window.location.href = "./successBooking.html"
                    })
                    
                }else{
                    formElement.submit()
                }

            }

        }

        formElement.onclick = function(e){
           var errorElement = formElement.querySelector(options.errorSelector + ".active")
           if(errorElement){
               if(timeOut){
                clearTimeout(timeOut)
               }
               errorElement.classList.remove("active")
           }
        }

        // submitBtn.onclick = function(e){
        //    e.stopPropagation()
        // }
        
    }


}


Validator.isRequired = function(selector, message){
    return {
        selector: selector,
        test: function(value){
            return value? undefined : message || 'Vui lòng điền vào trường này'
        }
    };
}

Validator.isDate = function(selector, message){
    return{
        selector: selector,
        test: function(input){
            let value = input.value
            let badInput = input.validity.badInput
            if(!value){
                if(!badInput){
                    return message? message : 'Vui lòng điền vào trường này'
                }else{
                    return message? message : input.validationMessage
                }
            }else{
                return undefined;
            }
        }
    }
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

Validator.isPhone = function(selector, message){
    return {
        selector: selector,
        test: function(value){
            var regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
            return regex.test(value) ? undefined : message || 'Vui lòng nhập đúng định dạng của số điện thoại' 
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

Validator.minDate = function(selector, message){
    return{
        selector: selector,
        test: function(input){
            let value = input.value
            let inputDate = new Date(value).getTime();
            let minDate = handleDate.getDateFromNow(2)
            let maxDate = handleDate.getDateFromNow(30)
            if(inputDate < minDate || inputDate > maxDate){
                return `Chọn ngày nằm trong khoảng từ <b>${handleDate.parseDate(minDate)}</b> 
                        đến <b>${handleDate.parseDate(maxDate)}</b>`
            }
        }
    }
}


Validator.minTime = function(selector, message) {
    return {
        selector: selector,
        test: function(value){
            let minTime = "07:00"
            let maxTime = "16:00"
            if(value < minTime || value > maxTime){
                return `Chọn giờ nằm trong khoảng từ <b>${minTime}</b> 
                        đến <b>${maxTime}</b>`
            }
        }
    }
}



export {Validator}