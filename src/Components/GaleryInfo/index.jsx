import React, { useState } from 'react'

import { GaleryCon, Info, Poster } from './style'
import OpenPhotos from '../OpenPhotos'

const GaleryInfo = ({ name, date, count, posterImg, picturesArr }) => {
    const [openPhoto, setOpenPhoto] = useState(false)
    return (
        <>
            <GaleryCon onClick={() => setOpenPhoto(!openPhoto)}>
                <Poster>
                    <img src={posterImg} alt="asas" />
                </Poster>
                <Info>
                    <div className='name'>
                        "{name}"
                    </div>
                    <div className='date'>
                        {date}
                    </div>
                    <div className='count'>
                        {count}
                        <br />
                        <p className='foto'>
                            Foto
                        </p>
                    </div>
                </Info>
            </GaleryCon>
            {
                openPhoto ? <OpenPhotos setOpenPhoto={setOpenPhoto} picturesArr={picturesArr} /> : null
            }
        </>
    )
}

export default GaleryInfo