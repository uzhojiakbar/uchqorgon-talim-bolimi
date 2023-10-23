import React from 'react'
import PagesTitle from '../../Components/PagesTitle'
import { GaleryMock } from '../../utils/galary'
import GaleryInfo from '../../Components/GaleryInfo'
import { Main } from './style'

const Galary = () => {
    return (
        <div>
            <PagesTitle title='Galareya' />
            <Main className="main">
                {
                    GaleryMock.map((v) => {
                        return <GaleryInfo
                            key={v.id}
                            name={v.info.name}
                            date={v.info.date}
                            count={v.pics.length}
                            posterImg={v.pics[0].path}
                            picturesArr={v.pics}
                        />

                    })
                }
            </Main>
        </div>
    )
}

export default Galary