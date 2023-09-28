import React from 'react'
import './style.css'
import './style.js'
import Test from '../Components/Test'
import { pagesLink } from '../utils/pages'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Home from '../Pages/Home'
import { Main } from './style.js'
import OpenLinks from '../utils/OpenLinks'
import LightNavbar from '../Components/LightNavbar'


const Root = () => {
    const [background, setBackground] = useState('def')
    return (
        <Main background={background} >
            {/* All Pages */}

            <Test />

            {/* All Pages */}
            <Routes>
                {/* Main Page */}
                <Route path={'/'} element={<Home setBackground={setBackground} />} />
                {
                    pagesLink.map((v) => {
                        return <Route key={v.id} path={v.path} element={v.element} />
                    })
                }
                {/* Main Page */}

                {/* Pages */}
                {
                    OpenLinks.map((v) => {
                        return typeof v.child === typeof [] ?
                            v.child.map((k) => {
                                return k.path.type === 'local' ?
                                    <Route
                                        path={k.path.path}
                                        element={
                                            <>
                                                <LightNavbar setBackground={setBackground} />
                                                {k?.element}
                                            </>
                                        } />
                                    : ''
                            })
                            : console.log('norarr')
                    })
                }

                {/* Pages */}

                {/* NotFound */}
                <Route path='*' element={
                    <>
                        <LightNavbar setBackground={setBackground} />
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