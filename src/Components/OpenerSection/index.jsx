import React from "react";
import { Container, Left, Right } from "./style";

import MMTV from '../../Assets/imgs/mmtv.jpg'

const OpenerSection = () => {
    return <Container>
        <Left>
            <div>
                <img src={MMTV} />
            </div>
            <p className="big" >
                Toshkent shahar xalq ta’limi boshqarmasi
            </p>
        </Left>
        <Right>
            <i className="small" >
                Maktab ta’lim va tarbiya poydevori, o‘qituvchilar esa uning tamal toshi

                <br />
                <br />
                Shavkat Mirziyoyev
            </i>
        </Right>
    </Container>
}

export default OpenerSection