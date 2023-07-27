import React from 'react'
import Navbar from '../../Components/Navbar'
import { HomeStyle } from './style'
import NavBottom from '../../Components/NavBottom'
import OpenerSection from '../../Components/OpenerSection'
import Count from '../../Components/Count'

const Home = ({ setBackground }) => {
    return (
        <HomeStyle className='home'>
            <div className='center' >
                <div className={'section'} >
                    <Navbar setBackground={setBackground} />
                    <NavBottom />
                </div>
                <div className='section' >
                    <OpenerSection />
                </div>
                <div className='section' >
                    <Count />
                </div>
            </div>
        </HomeStyle>
    )
}

export default Home