import React from 'react'
import Navbar from '../Navbar'
import NavBottom from '../NavBottom'

const LightNavbar = ({ setBackground }) => {

    return (
        <div className={'section'} >
            <Navbar
                setBackground={setBackground}
                theme={'dark'} />
            <NavBottom />
        </div>
    )
}

export default LightNavbar