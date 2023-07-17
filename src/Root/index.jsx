import React from 'react'
import './style.css'
import Test from '../Components/Test'
import { pagesLink } from '../utils/pages'
import { Route, Routes } from 'react-router-dom'
const Root = () => {
    return (
        <div>
            <Test />
            <Routes>
                {
                    pagesLink.map((v) => {
                        return <Route key={v.id} path={v.path} element={v.element} />
                    })
                }
            </Routes>
        </div>
    )
}

export default Root