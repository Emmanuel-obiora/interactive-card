import React from 'react'
import '../../style.css'
import { BsCircle } from 'react-icons/bs'

const CreditCard = () => {
return (
    <div className="credit-card">
        <div className="credit-card_top">
            <div className='credit-card_top_circle'>
                <BsCircle className="circle first"/>
                <BsCircle className="circle" />
            </div>
            <div className="holder">
                <span>0000 0000 0000 0000</span>
                <div className='holder_name'>
                    <span className='client-name'>Jane Appleseed</span>
                    <span className='exp-date'>00/00</span>
                </div>
            </div>
        </div>

        <div className="credit-card_bottom">
            <span className="black-label"></span>
            <span className='cvv'>000</span>
            <div className="extra-details">
                <small>Lorem ipsum dolor sit amet dolor sit amet.</small>
            </div>
        </div>
    </div>
)
}

export default CreditCard
