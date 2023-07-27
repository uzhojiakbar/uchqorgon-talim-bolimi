import React from 'react'
import { NavBtn, NavbarCon, Section } from './style'
import { useState } from 'react'
import ViewComponent from '../View'

const Navbar = ({ setBackground }) => {
    const [view, setView] = useState(false);
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
                <div className='view' >
                    <NavBtn onClick={() => setView(!view)} >
                        <i className='fa-solid fa-eye'></i>
                    </NavBtn>
                    {
                        view ? <ViewComponent setBackground={setBackground} setView={setView} /> : null
                    }
                </div>
                <NavBtn>
                    <i className='fa-solid'><span>O'Z</span></i>
                </NavBtn>
            </Section>
        </NavbarCon>
    )
}

export default Navbar