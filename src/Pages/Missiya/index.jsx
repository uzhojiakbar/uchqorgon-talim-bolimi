import React from 'react'
import { Container } from './style'
import PagesTitle from '../../Components/PagesTitle'
import MissiyaItems from '../../utils/missiya'

const Missiya = () => {
    return (
        <Container>
            <PagesTitle title={'Missiya, maqsad va vazifalar'} />
            <div className='main'>
                <h1 className="bold textCenter black serif">
                    Missiya, maqsad va vazifalar
                </h1>
                <ul className='black'>
                    {
                        MissiyaItems.map((v) => {
                            return <li key={v.id}>
                                {v.text}
                            </li>
                        })
                    }
                </ul>
            </div>
        </Container>
    )
}

export default Missiya