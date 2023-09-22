import React from "react";
import { Container, Left, Right } from "./style";

import MMTV from '../../Assets/logo/xtvLogo.svg'

const OpenerSection = () => {
    return <Container>
        <Left>
            <div>
                <img alt="MMTV" src={MMTV} />
            </div>
            <p className="big" >
                Uchqo'rgon tumani xalq talimi bo'limi
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