import React from 'react'
import Navbar from '../../Components/Navbar'
import { HomeStyle } from './style'
import NavBottom from '../../Components/NavBottom'

const Home = () => {
    return (
        <HomeStyle className='home'>
            <div className='center' >
                <Navbar />
                <NavBottom />
            </div>
        </HomeStyle>
    )
}

export default Home