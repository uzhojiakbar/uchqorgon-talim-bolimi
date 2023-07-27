import React from 'react'
import Navbar from '../../Components/Navbar'
import { HomeStyle } from './style'
import NavBottom from '../../Components/NavBottom'
import OpenerSection from '../../Components/OpenerSection'
import Count from '../../Components/Count'
import InformationPage from '../../Components/InformationPage'
import Contact from '../../Components/Contact'
import Stat from '../../Components/Statistics'

const Home = ({ setBackground }) => {
    return (
        <>
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
            <InformationPage />
            <Contact />
            <Stat />
        </>
    )
}

export default Home