import React from 'react'
import '../../style.css'

const CardForm = () => {
return (
    <div>
        <form action="submit">
            <div className="form-input">
                <label htmlFor="fullName">Cardholder Name</label>
                <input id="fullName" type="text" placeholder='e.g. Jane Appleseed'/>
                <p className='error-message'>Can't be blank</p>
            </div>
            <div className="form-input">
                <label htmlFor="cardNumber">Card Number</label>
                <input id="cardNumber" type="tel" placeholder='e.g. 1234 5678 9123 0000'/>
                <p className='error-message'>Can't be blank</p>
            </div>
            <div className="card-det">
                <div className="card-det_left">
                    <label htmlFor="month">Exp. Date (MM/YY)</label>
                    <div className='card-det_left-info'>
                        <input type="tel" id='month' placeholder='MM' />
                        <input type="tel" placeholder='YY' />
                    </div>
                    <p className='error-message'>Can't be blank</p>
                </div>

                <div className="card-det_right">
                    <label htmlFor="Cvv">CVV</label>
                    <input type="tel" placeholder='e.g 123' />
                    <p className='error-message'>Can't be blank</p>
                </div>
            </div>
            <button type='submit'>Confirm</button>
        </form>
    </div>
)
}

export default CardForm
