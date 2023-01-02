import React from 'react'
import '../../style.css'
import { BsCircle } from 'react-icons/bs'

const CreditCard = () => {
return (
    <div className="credit-card">
        <div className="credit-card_top">
            <div className='credit-card_top_circle'>
                <BsCircle className="first=circle"/>
                <BsCircle />
            </div>
            <span>0000 0000 0000 0000</span>
            <div className='credit-card_bottom_circle'>
                <span className='client-name'>Jane Appleseed</span>
                <span className='exp-date'>00/00</span>
            </div>
        </div>

        <div className="credit-card_bottom">
            <span></span>
            <span className='cvv'>000</span>
            <div className="extra-details">

            </div>
        </div>
    </div>
)
}

export default CreditCard
