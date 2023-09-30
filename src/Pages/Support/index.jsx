import React from 'react'
import { Con } from './style'
import PagesTitle from '../../Components/PagesTitle'

const Support = () => {
    return (
        <Con>
            <PagesTitle
                title={'Bogʻlanish'}
            />

            <div className="main paddingTop50 black">
                <div className="support">
                    <div className='contact'>
                        <div className="item">
                            <div className="logo">
                                <i className='fa-solid fa-phone'></i>
                            </div>
                            <div className="info">
                                <div className="name bold serif">Telefon raqami</div>
                                <a href='tel:+998694624015' className="link">69 462 40 15</a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="logo">
                                <i className='fa-regular fa-envelope'></i>
                            </div>
                            <div className="info">
                                <div className="name bold serif">Email</div>
                                <a href='mailto:uchqorgonmmtb@gmail.com' className="link">uchqorgonmmtb@gmail.com</a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="logo">
                                <i className='fa-regular fa-clock'></i>
                            </div>
                            <div className="info">
                                <div className="name bold serif">Ish tartibi</div>
                                <div className="link">Dushanba-Juma: 9:00 dan  18:00 gacha
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="logo">
                                <i className='fa-solid fa-location-dot'></i>
                            </div>
                            <div className="info">
                                <div className="name bold serif">Telefon raqami</div>
                                <div className="link">Uchqo'rg'on tuman hokimiyati, Учқўрғон, Oʻzbekiston

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='map'>
                        <iframe
                            title='uchqorgon'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6011.691853632795!2d72.07900051687557!3d41.11605586214165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bcad3267505413%3A0x5d9da216bcec85b5!2sUchqo&#39;rg&#39;on%20tumani%20maktabgacha%20ta&#39;lim%20bo&#39;limi!5e0!3m2!1suz!2s!4v1696086671020!5m2!1suz!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                </div>
            </div>
        </Con>
    )
}

export default Support