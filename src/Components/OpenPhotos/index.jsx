import React, { useState } from 'react'
import { Button, NavPhoto, OpenPhotosCon, OthImage, OtherImages, Photo } from './style'

const OpenPhotos = ({ picturesArr, setOpenPhoto }) => {
    const [slcImg, setSlcImg] = useState(0)
    return (
        <>

            <OpenPhotosCon className='black'>
                <NavPhoto>
                    <div>
                        {slcImg + 1} / {picturesArr.length}
                    </div>
                    <div onClick={() => setOpenPhoto(false)} className='close' >
                        x
                    </div>
                </NavPhoto>
                <Photo>
                    <Button
                        disabled={slcImg <= 0}
                        onClick={() => setSlcImg(slcImg >= 1 ? slcImg - 1 : slcImg)}
                        className='icon'><i className="fa-solid fa-arrow-left"></i></Button
                    >
                    <img src={picturesArr[slcImg].path} alt="loading" />
                    <Button
                        onClick={() => setSlcImg(slcImg <= picturesArr.length - 2 ? slcImg + 1 : slcImg)}
                        disabled={slcImg >= picturesArr.length - 1}
                        className='icon'><i className="fa-solid fa-arrow-right"></i></Button
                    >
                </Photo>
                <OtherImages>
                    {
                        picturesArr.map((v) => {
                            console.log(v.id == slcImg + 1)
                            return <OthImage
                                onClick={() => setSlcImg(v.id - 1)}
                                active={v.id == slcImg + 1} src={v.path} />
                        })
                    }
                </OtherImages>
            </OpenPhotosCon>
        </>
    )
}

export default OpenPhotos