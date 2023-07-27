import React from 'react'
import { Button, ContactCon, Input, Inputs, Text } from './style'
import Title from '../Title'

const Contact = () => {
    return (
        <ContactCon>
            <Title name={`Biz bilan bog'laning`} />
            <form className='main' >
                <Inputs className='inputs' >
                    <Input letter={'a'} type='text' placeholder='F.I.SH' />
                    <Input letter={'b'} type='email' placeholder='E.POCHTA' />
                    <Input letter={'c'} type='text' placeholder='Telefon' />
                    <Input letter={'d'} type='text' placeholder='Mavzu' />
                    <Text letter={'e'} type='text' placeholder='Xabartlar' />
                </Inputs>
                <Button type='reset' >Yuborish</Button>
            </form>
        </ContactCon>
    )
}

export default Contact