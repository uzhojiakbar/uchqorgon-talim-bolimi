import React from 'react'
import PagesTitle from '../../Components/PagesTitle'

import Pic from '../../Assets/imgs/boshqarma.jpg'
import { Con } from './style'
const BoshqarmaTuzilmas = () => {
    return (
        <Con className='black'>
            <PagesTitle
                title='Boshqarma tuzilmasi'
            />

            <div className='main'>
                <div className="fw700 paddingTop50">
                    Boshqarma tuzilmasi
                </div>
                <img src={Pic} alt="" />
            </div>
        </Con>
    )
}

export default BoshqarmaTuzilmas