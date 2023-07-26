import React from 'react'
import { InfopgImg,InfoPgSt, InformationSt, Manzil, Malumotlar, InfopgBt } from './style';
import { InformationMock } from '../../Mock';

const InformationPage = () => {
  return (
    <>
       <InformationSt>
        {
            InformationMock.map((v)=>{
                return                 <InfoPgSt>
                <div className='info'>
                <InfopgImg>
                    {/* <img src={v.img} alt={'Rasim bor'} /> */}
                    <i className="fa-solid fa-chalkboard-user"></i>
                </InfopgImg>
                <Manzil>
                    {v.manzil}
                </Manzil>
                </div>
                <div className='info2'>
                <Malumotlar>
                    {v.maktab}
                </Malumotlar>
                <Malumotlar>
                    {v.qonun}
                </Malumotlar>
                <Malumotlar>
                    {v.oquvchi}
                </Malumotlar>
                <Malumotlar>
                    {v.qabul}
                </Malumotlar>
                    </div>
                <InfopgBt>Batafsil</InfopgBt>
            </InfoPgSt>
            })
        }        

    </InformationSt>
    <h1>sdas
        sad

        asd
        <br />
        sadasd
    </h1>
    </>
  )
}

export default InformationPage;