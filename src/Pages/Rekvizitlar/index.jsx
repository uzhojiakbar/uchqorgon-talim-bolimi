import React from 'react'
import { Con } from './style'
import PagesTitle from '../../Components/PagesTitle'

const Rekvizitlar = () => {
    return (
        <Con>
            <PagesTitle
                title={'Rekvizitlar'}
            />
            <div className="main paddingTop50 black">
                <div className="bold black serif">
                    Rekvizitlar
                </div>
                <div className='black marginTop15'>
                    TOSHKENT SHAHAR XALQ TA’LIMI <br />
                    BOSH BOSHQARMASI <br />
                    Adres: Tashkent shahri, Mustaqillik - 69 <br />
                    h/r 23 402 000 300 100 001 010<br />
                    STIR: 200 934 858 ,  201 122 919<br />
                    l/s 400 021 860 262 697 096 300 075 001<br />
                    MFO 00 014  MB XKKM Toshkent sh.
                </div>
            </div>
        </Con>
    )
}

export default Rekvizitlar