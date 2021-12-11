import React from 'react'


import Button from './button'
import './hero.css'

const hero = () => {
    return (
        <div className='hero-container'>
            <video src='/videos/pexels-mikhail-nilov-7677695.mp4' autoPlay loop muted/>
            <h1>Suck on my nuts</h1>
            <p>on my raisins</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'> from the garden</Button>
            </div>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'> ready for the pickin' </Button>
            </div>
        </div>
    )
}

export default hero
