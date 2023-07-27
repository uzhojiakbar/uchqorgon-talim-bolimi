import React from 'react'
import { Option, Options, StatCon } from './style'
import Title from '../Title'

const Stat = () => {
    const data = [
        { id: 1, count: 329, desc: 'Kelib tushgan arizalar' },
        { id: 2, count: 3, desc: 'Rad etilgan arizalar' },
        { id: 3, count: 309, desc: 'Ijobiy hal etilgan' },
        { id: 4, count: 17, desc: 'Ko`rib chiqilmoqda' },
    ]
    return (
        <StatCon>
            <Title name={'Murojaatlar statistikasi'} />
            <Options className="main">
                {
                    data.map((v) => {
                        return <Option>
                            <div className="count">{v.count}</div>
                            <div className="info">{v.desc}</div>
                        </Option>
                    })
                }
            </Options>
        </StatCon>
    )
}

export default Stat