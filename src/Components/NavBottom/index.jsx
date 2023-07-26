import React, { useState } from 'react'

import { Child, NavBottomCon } from './style'
import { NavLink } from 'react-router-dom'

const NavBottom = () => {
    const NavBottomLinks = [
        {
            id: 1, name: 'Faoliyat', child: [
                { id: 1, name: 'Rahbariyat', path: 'leders/rahbar' },
                { id: 2, name: 'Rahbariyat', path: 'leders/rahbar' },
                { id: 3, name: 'Rahbariyat', path: 'leders/rahbar' },
                { id: 4, name: 'Rahbariyat', path: 'leders/rahbar' },
            ]
        },
        {
            id: 2, name: 'Hujjatlar', path: '/hujjatlar',
        },
        {
            id: 3, name: 'Ta`lim', child: [
                { id: 1, name: 'Rahbariyat', path: 'leders/rahbar' },
                { id: 2, name: 'Rahbariyat', path: 'leders/rahbar' },
                { id: 3, name: 'Rahbariyat', path: 'leders/rahbar' },
                { id: 4, name: 'Rahbariyat', path: 'leders/rahbar' },
            ]
        },
        {
            id: 4, name: 'Interaktiv xizmatlar', child: [
                { id: 1, name: 'Rahbariyat', path: 'leders/rahbar' },
                { id: 2, name: 'Rahbariyat', path: 'leders/rahbar' },
                { id: 3, name: 'Rahbariyat', path: 'leders/rahbar' },
                { id: 4, name: 'Rahbariyat', path: 'leders/rahbar' },
            ]
        },
        {
            id: 5, name: 'Axborot xizmati', child: [
                { id: 1, name: 'Rahbariyat', path: 'leders/rahbar' },
                { id: 2, name: 'Rahbariyat', path: 'leders/rahbar' },
                { id: 3, name: 'Rahbariyat', path: 'leders/rahbar' },
                { id: 4, name: 'Rahbariyat', path: 'leders/rahbar' },
            ]
        },
        {
            id: 6, name: 'Ochiq ma`lumotlar', child: [
                { id: 1, name: 'Rahbariyat', path: 'leders/rahbar' },
                { id: 2, name: 'Rahbariyat', path: 'leders/rahbar' },
                { id: 3, name: 'Rahbariyat', path: 'leders/rahbar' },
                { id: 4, name: 'Rahbariyat', path: 'leders/rahbar' },
            ]
        },
    ]

    const [showChild, setShowchild] = useState(false)
    return (
        <NavBottomCon>
            {
                NavBottomLinks.map((v) => {
                    return <NavLink
                        onMouseEnter={() => setShowchild(v.id)}
                        onMouseOut={() => setShowchild(false)}
                        key={v.id}
                        className={'link'}
                        to={v.path ? v.path : ''}>
                        {v.name}
                        {
                            v.child && showChild === v.id &&
                            <Child
                                onMouseEnter={() => setShowchild(v.id)}
                                onMouseOut={() => setShowchild(false)}
                                className='child' >
                                {
                                    v.child.map((k) => {
                                        return <NavLink
                                            className={'child-link'}
                                            onMouseEnter={() => setShowchild(v.id)}
                                            to={k.path}>
                                            {k.name}
                                        </NavLink>
                                    })
                                }
                            </Child>
                        }
                    </NavLink>
                })
            }


        </NavBottomCon >
    )
}

export default NavBottom