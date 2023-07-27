import React from 'react'
import { CountCon, Option } from './style'

const Count = () => {
    const data = [
        { id: 1, count: 47, desc: `umumiy o'rta ta'lim maktablari` },
        { id: 2, count: 100, desc: `Ko'rib chiqilgan murojatlar` },
        { id: 3, count: 1400, desc: `O'qituvchilar` },
        { id: 4, count: 34256, desc: `O'quvchilar` },
    ]
    return (
        <CountCon>
            {data.map((v) => {
                return <Option key={v.id} >
                    <div className="count">{v.count}</div>
                    <div className="desc">{v.desc}</div>
                </Option>
            })}
        </CountCon>
    )
}

export default Count