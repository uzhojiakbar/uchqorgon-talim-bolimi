import React from 'react'
import { Option, Section, Title, View } from './style'

const ViewComponent = ({ setView, setBackground }) => {
    return (
        <View>
            <Section>
                <Title>
                    <p>Ko'rinish</p>
                    <p onClick={() => setView(false)} >X</p>
                </Title>
                <div className='options' >
                    <Option onClick={() => setBackground('def')} >A</Option>
                    <Option onClick={() => setBackground('gray')} type={'gray'} >A</Option>
                </div>
            </Section>
        </View>
    )
}

export default ViewComponent