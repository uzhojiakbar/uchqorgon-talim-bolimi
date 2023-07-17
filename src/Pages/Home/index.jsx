import React from 'react'
import Navbar from '../../Components/Navbar'
import { HomeStyle } from './style'

const Home = () => {
    return (
        <HomeStyle className='home'>
            <Navbar />
        </HomeStyle>
    )
}

export default Home