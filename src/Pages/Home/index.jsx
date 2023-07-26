import React from 'react'
import Navbar from '../../Components/Navbar'
import { HomeStyle } from './style'
import NavBottom from '../../Components/NavBottom'

const Home = () => {
    return (
        <HomeStyle className='home'>
            <Navbar />
            <NavBottom />
        </HomeStyle>
    )
}

export default Home