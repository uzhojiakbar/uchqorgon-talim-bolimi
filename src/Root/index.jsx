import React from 'react'
import './style.css'
import './style.js'
import Test from '../Components/Test'
import { pagesLink } from '../utils/pages'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Home from '../Pages/Home'
import { Main } from './style.js'
import Navbar from '../Components/Navbar'
import NavBottom from '../Components/NavBottom'
import OpenLinks from '../utils/OpenLinks'


const Root = () => {
    const [background, setBackground] = useState('def')
    return (
        <Main background={background} >
            <Test />
            <Routes>
                {/* Global */}
                <Route path={'/'} element={<Home setBackground={setBackground} />} />
                {
                    pagesLink.map((v) => {
                        return <Route key={v.id} path={v.path} element={v.element} />
                    })
                }
                {/* Global */}

                {/* Pages */}
                {
                    OpenLinks.map((v) => {
                        // v.child.map((v)=>{
                        //     <Route path={v.path.path} element={v.element?v.element:'Coming soon'}/>
                        // })
                        console.log(typeof v.child);
                    })
                }


                {/* Pages */}

                {/* NotFound */}
                <Route path='*' element={
                    <>
                        <div className={'section'} >
                            <Navbar
                                setBackground={setBackground}
                                theme={'dark'} />
                            <NavBottom />
                        </div>
                        <h1
                            style={{ "color": "black", "padding": '10px' }}
                        >
                            404 || Page Not found
                        </h1>
                    </>
                } />
                {/* NotFound */}

            </Routes>
        </Main>
    )
}

export default Root