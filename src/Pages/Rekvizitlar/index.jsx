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
                    UCHQO‘RG‘ON TUMAN MAKTABGACHA VA MAKTAB TA‘LIMI BO‘LIMI <br />
                    Adress: Uchqo'rg'on tuman, Do'stlik ko'cha 33-uy <br />
                    h/r 23402000300100001010<br />
                    STIR: 200103324<br />
                    l/s 100022860142347096300072001<br />
                    MFO 00014  MB HKKM Toshkent sh.<br />
                </div>
            </div>
        </Con>
    )
}

export default Rekvizitlar