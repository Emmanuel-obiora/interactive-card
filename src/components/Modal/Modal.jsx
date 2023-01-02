import React from 'react'
import '../../style.css'
import { IoIosCheckmarkCircle } from 'react-icons/io'

const Modal = () => {
return (
    <div>
        <IoIosCheckmarkCircle />
        <h1>Thank you!</h1>
        <small>We've added your card details</small>
        <button>Continue</button>
    </div>
)
}

export default Modal
