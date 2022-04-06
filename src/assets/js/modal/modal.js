class Modal{
    constructor(modal, modalBody, setsOfElements){
        this.modal = modal;
        this.modalBody = modalBody;
        this.setsOfElements = setsOfElements;
    }


    handleEvents(){
        const app = this;
        this.modalBody.addEventListener("click", function(e){
            app.modal.style.display = "none"
        })

        this.setsOfElements.forEach((set)=>{
            let {openBtns, modalElement, closeBtn, modalForm} = set;

            app.modalBody.addEventListener("click", function(e){
                modalElement.style.display = "none"
                modalForm.reset()
                modalForm.click()
            })

            openBtns.forEach((btn)=>{
                btn.onclick = function(e){
                    e.preventDefault();
                    app.modal.style.display = "block"
                    modalElement.style.display = "block"
                }
            })
            
            modalElement.onclick = function(e){
                e.stopPropagation();
            }

            closeBtn.onclick = function(){
                app.modal.style.display = "none"
                modalElement.style.display = "none"
                modalForm.reset()
                modalForm.click()
            }

        })
    }

    create(){
        this.handleEvents()
    }
}

export {Modal}