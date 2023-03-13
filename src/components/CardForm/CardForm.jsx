import React, { useState } from 'react'
import '../../style.css'
import Logo from '../../images/card-logo.svg'
import ThankYou from '../../components/ThankYou/ThankYou'

const CardForm = () => {
    const [info, setInfo] = useState({
        fullname: '',
        cardNumber: '',
        cardMonth: '',
        cardYear: '',
        cardCvv: ''
    });

    const handleChangeForm = (e) => {
        e.preventDefault();
        setInfo({
            ...info, [e.target.name]: e.target.value
        });
    }

    function newCards(){

            if(info.fullname === ""){
                const disError = document.getElementById('fullName').parentNode;
    
                disError.classList.add('section-error');
            } else {
                const disError = document.getElementById('fullName').parentNode;
                disError.classList.remove('section-error');
            }
    
            if(info.cardNumber === ""){
                const disError = document.getElementById('CardNumber').parentNode;
    
                disError.classList.add('section-error');
            } else{
                const disError = document.getElementById('CardNumber').parentNode;
    
                disError.classList.remove('section-error');
            }
    
            if(info.cardMonth === "" || info.cardYear === ""){
                const disError = document.getElementById('cardMth').parentNode.parentNode;
                disError.classList.add('section-error');
                
                if(info.cardMonth === ""){
                    const errBox = document.getElementById('cardMth');
    
                    errBox.classList.add('special-error');
                } else{
                    const errBox = document.getElementById('cardMth');
    
                    errBox.classList.remove('special-error');
                }
    
                if(info.cardYear === ""){
                    const errBox = document.getElementById('cardYr');
    
                    errBox.classList.add('special-error');
                } else {
                    const errBox = document.getElementById('cardYr');
    
                    errBox.classList.remove('special-error');
                }
            } else {
                const disError = document.getElementById('cardMth').parentNode.parentNode;
                const errBox2 = document.getElementById('cardYr');
                const errBox1 = document.getElementById('cardMth');
    
                errBox1.classList.remove('special-error');
                errBox2.classList.remove('special-error');
                disError.classList.remove('section-error');
            }
    
            if(info.cardCvv === ""){
                const disError = document.getElementById('Cvv').parentNode;
    
                disError.classList.add('section-error');
            } else {
                const disError = document.getElementById('Cvv').parentNode;
    
                disError.classList.remove('section-error');
            }
            
        if(info.fullname!=="" && info.cardNumber!=="" && info.cardMonth!=="" && info.cardYear!=="" && info.cardCvv!==""){
            const Modal = document.getElementById('Modal');
            const Thanks = document.getElementById('Thanks');
            const hideForm = document.getElementById('hideForm');
    
            Modal.classList.add('show-modal');
            Thanks.classList.add('show-thanks');
            hideForm.classList.add('hide-form');
        }
        

    }

return (
    <main className="main">
        <div className="credit-card">
            <div className="credit-card_top">
                <div className='credit-card_top_circle'>
                    <img src={Logo} alt="logo" />
                </div>
                <div className="holder">
                    <span>{info.cardNumber}</span>
                    <div className='holder_name'>
                        <span className='holder_name-client'>{info.fullname}</span>
                        <div className='exp-date'>
                            <span >{info.cardMonth}</span>/
                            <span >{info.cardYear}</span>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="credit-card_bottom">
                <span className='cvv'>{info.cardCvv}</span>
            </div>
        </div>

        <form action="submit" autoComplete="off">
            <div id="hideForm" className='form-container'>
                <div className="form-input">
                    <label htmlFor="fullName">Cardholder Name</label>
                    <input id="fullName" className='card-input' type="text" name="fullname" onChange={handleChangeForm} placeholder='e.g. Jane Appleseed' />
                    <p className='error-message'>Can't be blank</p>
                </div>
                <div className="form-input">
                    <label htmlFor="CardNumber">Card Number</label>
                    <input id="CardNumber" className='card-input' type="tel" name="cardNumber" value={info.cardNumber.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ").trim()} maxLength={19} onChange={handleChangeForm} placeholder='e.g. 1234 5678 9123 0000' />
                    <p className='error-message'>Can't be blank</p>
                </div>
                <div className="card-det">
                    <div className="card-det_left">
                        <label htmlFor="cardMth">Exp. Date (MM/YY)</label>
                        <div className='card-det_left-info' id="month">
                            <input type="tel" id='cardMth' className='card-input' name="cardMonth" maxLength={2} onChange={handleChangeForm} placeholder='MM' />
                            <input type="tel" id='cardYr' className='card-input' name="cardYear" maxLength={2} onChange={handleChangeForm} placeholder='YY' />
                        </div>
                        <p className='error-message'>Can't be blank</p>
                    </div>

                    <div className="card-det_right">
                        <label htmlFor="Cvv">CVV</label>
                        <input type="tel" className='card-input' id="Cvv" name="cardCvv" maxLength={3} onChange={handleChangeForm} placeholder='e.g 123' />
                        <p className='error-message'>Can't be blank</p>
                    </div>
                </div>
                <button type='button' id="cardsN" className='sub-btn' onClick={newCards}>Confirm</button>
            </div>
            
            <ThankYou />
        </form>
    </main>
)
}

export default CardForm
