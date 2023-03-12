import React from 'react'
import '../../style.css'
import complete from '../../images/icon-complete.svg'


const ThankYou = () => {

    function removeMessage(){
        const Modal = document.getElementById('Modal');
        const Thanks = document.getElementById('Thanks');
        const hideForm = document.getElementById('hideForm');
   
       Modal.classList.remove('show-modal');
       Thanks.classList.remove('show-thanks');
       hideForm.classList.remove('hide-form');
       }

    return (
        <div className='thank-you' id="Thanks">
            <img src={complete} alt="icon-complete" />
            <strong className='thank-you_head'>Thank you!</strong>
            <small className='thank-you_info'>We've added your card details</small>
            <button type='button' className='sub-btn' onClick={removeMessage}>Continue</button>
        </div>
    )
}

export default ThankYou