import React, { Component } from 'react'
import styled from 'styled-components'
import Header from '../common/header'
import { properties } from '../../constant'

const Mainwrapper = styled.div`
    width : 100%;
    height : 100%;
    background-color : ${properties.theme2};
`

class Default extends Component {
    render(){
        return(
            <Mainwrapper>
                <Header />
            </Mainwrapper>
        )
    }
}


export default Default