import React from 'react'
import Footer from './components/Footer/Footer'
import CardForm from './components/CardForm/CardForm'
import Modal from './components/Modal/Modal'
// import ThankYou from './components/ThankYou/ThankYou'
import './App.css'

const App = () => {
return (
    <div className="app-container">
        <CardForm />
        {/* <ThankYou /> */}
        <Footer />
        <Modal />
    </div>
)
}

export default App
