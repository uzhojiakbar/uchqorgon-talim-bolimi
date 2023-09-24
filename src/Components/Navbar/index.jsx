import React from 'react'
import { NavBtn, NavbarCon, Section } from './style'
import { useState } from 'react'
import ViewComponent from '../View'
// import {ReactComponent as XtvLogo} from '../../Assets/logo/xtvLogo.svg'
import XtvLogo from '../../Assets/logo/xtvLogo.svg'
import XtvLogoDark from '../../Assets/logo/XtvLogoDark.svg'
import Titles from '../../utils/title'

const Navbar = ({ setBackground = ()=>{}, theme }) => {
    const [view, setView] = useState(false);
    return (
        <NavbarCon theme={theme} >
            <Section className='section left' >
                <NavBtn theme={theme}>
                    <i className='fa-solid fa-bars' ></i>
                </NavBtn>
            </Section>
            <Section className='section center' >
                {
                    theme === 'dark' ? <>
                        <NavBtn theme={theme} noborder={'no'}>
                            <img src={XtvLogoDark} alt="" />
                            <div className="title">
                            {
                                Titles.name
                            }
                            </div>
                        </NavBtn>
                    </> : 
                    <NavBtn theme={theme} noborder={'no'}>
                        <img src={XtvLogo} alt="" />
                        {/* <XtvLogo fill='red' stroke='red' color='red' border='red' /> */}
                    </NavBtn>
                }
            </Section>
            <Section className='section right' >
                <div className='view' >
                    <NavBtn theme={theme} onClick={() => setView(!view)} >
                        <i className='fa-solid fa-eye'></i>
                    </NavBtn>
                    {
                        view ? <ViewComponent setBackground={setBackground} setView={setView} /> : null
                    }
                </div>
                <NavBtn theme={theme} >
                    <i className='fa-solid'><span>O'Z</span></i>
                </NavBtn>
            </Section>
        </NavbarCon>
    )
}

export default Navbar