import React from 'react'
import { TestSty } from './style'
import Marquee from 'react-fast-marquee'

const Test = () => {
    return (
        <TestSty>
            <Marquee
                className='mark'
            >
                Sayt Test Rejimida Ishlamoqda
            </Marquee>
        </TestSty>
    )
}

export default Test