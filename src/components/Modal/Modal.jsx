import React from 'react'
import '../../style.css'

const Modal = () => {

    function removeM(){
        const Modal = document.getElementById('Modal');
        const Thanks = document.getElementById('Thanks');
        const hideForm = document.getElementById('hideForm');
   
        Modal.classList.remove('show-modal');
        Thanks.classList.remove('show-thanks');
        hideForm.classList.remove('hide-form');
    }

return (
    <div className='modal' id='Modal' onClick={removeM}>

    </div>
)
}

export default Modal
