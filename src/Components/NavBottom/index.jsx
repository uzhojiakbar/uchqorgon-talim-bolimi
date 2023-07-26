import React from 'react'

import { NavBottomCon } from './style'
import { NavLink } from 'react-router-dom'

const NavBottom = () => {
    const NavBottomLinks = [
        { id: 1, name: 'Faoliyat', child: [] },
        { id: 2, name: 'Hujjatlar', path: '/hujjatlar', child: [] },
        { id: 3, name: 'Ta`lim', child: [] },
        { id: 4, name: 'Interaktiv xizmatlar', child: [] },
        { id: 4, name: 'Axborot xizmati', child: [] },
        { id: 4, name: 'Ochiq ma`lumotlar', child: [] },
    ]

    return (
        <NavBottomCon>
            {
                NavBottomLinks.map((v) => {
                    return v.path ? <NavLink
                        key={v.id}
                        className={'link'}
                        to={v.name}>
                        {v.name}
                    </NavLink> : <div className={'link'}>
                        {v.name}
                    </div>
                })
            }
        </NavBottomCon >
    )
}

export default NavBottom