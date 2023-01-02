import React from 'react'
import '../../style.css'

const CardForm = () => {
return (
    <div>
        <form action="submit" autocomplete="off">
            <div className="form-input">
                <label htmlFor="fullName">Cardholder Name</label>
                <input id="fullName" type="text" placeholder='e.g. Jane Appleseed'required />
                <p className='error-message'>Can't be blank</p>
            </div>
            <div className="form-input">
                <label htmlFor="cardNumber">Card Number</label>
                <input id="cardNumber" type="tel" maxLength={16} placeholder='e.g. 1234 5678 9123 0000' required pattern='[0-9]'/>
                <p className='error-message'>Can't be blank</p>
            </div>
            <div className="card-det">
                <div className="card-det_left">
                    <label htmlFor="month">Exp. Date (MM/YY)</label>
                    <div className='card-det_left-info' id="month">
                        <input type="tel" maxLength={2} placeholder='MM' />
                        <input type="tel" maxLength={2} placeholder='YY' />
                    </div>
                    <p className='error-message'>Can't be blank</p>
                </div>

                <div className="card-det_right">
                    <label htmlFor="Cvv">CVV</label>
                    <input type="tel" id="Cvv" maxLength={3} placeholder='e.g 123' />
                    <p className='error-message'>Can't be blank</p>
                </div>
            </div>
            <button type='submit'>Confirm</button>
        </form>
    </div>
)
}

export default CardForm
