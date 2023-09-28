import React from 'react'
import { Con } from './style'
import Titles from '../../utils/title'

const PagesTitle = ({ title = Titles.name }) => {
    return (
        <Con>
            <div className='main' >
                <div className='title' >
                    {title}
                </div>
            </div>
        </Con>
    )
}

export default PagesTitle