import React, { useState } from 'react'

import { Child, NavBottomCon } from './style'
import { NavLink } from 'react-router-dom'
import  OpenLinks  from '../../utils/OpenLinks'
const NavBottom = () => {
    const [showChild, setShowchild] = useState(false)
    return (
        <NavBottomCon>
            {
                OpenLinks.map((v) => {
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
                                        return k.path.type === 'local'?<NavLink
                                        className={'child-link'}
                                        onMouseEnter={() => setShowchild(v.id)}
                                        to={k.path.path}>
                                        {k.name}
                                    </NavLink> : ''
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