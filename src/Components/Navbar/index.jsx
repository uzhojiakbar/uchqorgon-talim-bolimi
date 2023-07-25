import React from 'react'
import { NavBtn, NavbarCon, Section } from './style'


const Navbar = () => {
    return (
        <NavbarCon>
            <Section className='section left' >
                <NavBtn>
                    <i className='fa-solid fa-bars' ></i>
                </NavBtn>
            </Section>
            <Section className='section center' >
                <NavBtn>
                    <i className='fa-solid'>M</i>
                </NavBtn>
            </Section>
            <Section className='section right' >
                <NavBtn>
                    <i className='fa-solid fa-eye' ></i>
                </NavBtn>
                <NavBtn>
                    <i className='fa-solid'><span>O'Z</span></i>
                </NavBtn>
            </Section>
        </NavbarCon>
    )
}

export default Navbar