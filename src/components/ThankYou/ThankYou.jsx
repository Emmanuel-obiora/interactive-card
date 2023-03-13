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
        <article className='thank-you' id="Thanks">
            <img src={complete} alt="icon-complete" />
            <h2 className='thank-you_head'>Thank you!</h2>
            <p className='thank-you_info'>We've added your card details</p>
            <button type='button' className='sub-btn' onClick={removeMessage}>Continue</button>
        </article>
    )
}

export default ThankYou