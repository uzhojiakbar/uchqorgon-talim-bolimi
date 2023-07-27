import React from 'react'
import './style.css'
import './style.js'
import Test from '../Components/Test'
import { pagesLink } from '../utils/pages'
import { Route, Routes } from 'react-router-dom'
import InformationPage from '../Components/InformationPage'
import { useState } from 'react'
import Home from '../Pages/Home'
import { Main } from './style.js'
const Root = () => {
    const [background, setBackground] = useState('def')
    console.log(background);
    return (
        <Main background={background} >
            <Test />
            <Routes>
                <Route path={'/'} element={<Home setBackground={setBackground} />} />
                {
                    pagesLink.map((v) => {
                        return <Route key={v.id} path={v.path} element={v.element} />
                    })
                }
            </Routes>
            <InformationPage />
        </Main>
    )
}

export default Root