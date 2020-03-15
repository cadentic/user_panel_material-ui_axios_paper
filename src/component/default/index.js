import React, { Component } from 'react'
import styled from 'styled-components'
import Header from '../common/header'
import { properties } from '../../constant'
import ProgressMonitor from '../indicators/progressBars/ProgressMonitor';
import Monitor from '../indicators/progressBars/Monitor';
import CompositLineBar from '../indicators/barCharts/CompositLineBar';
import SimpleBarChart from '../indicators/barCharts/SimpleBarChart';
import BarIndicator from '../indicators/barCharts/BarIndicator'
import ProgressIndicator from '../indicators/progressBars/ProgressIndicator';
import ProfileSummary from '../indicators/profileSummary';

const Mainwrapper = styled.div`
    width : 100%;
    height : 100%;
    background-color : ${properties.theme2};
`

const Content = styled.div`
    padding: 12.5px;
`

const Row = styled.div`
    width: -webkit-fill-available;
    display: flex;
    flex-direction: row;
`

const Col = styled.div`
    width: ${props => props.width || "-webkit-fill-available"};
    display: flex;
    flex-direction: row;
    padding: 12.5px;
`

const StackedCol = styled(Col)`
flex-direction: column;
`

class Default extends Component {
    render(){
        return(
            <Mainwrapper>
                <Header />
                <Content>
                    <Row>
                        <Col width="25%">
                            <ProgressMonitor strokeColor="#f4c575" cPercentage="27" lPercentage="51" />
                        </Col>
                        <Col width="25%">
                            <ProgressMonitor strokeColor="#60244a" cPercentage="47" lPercentage="83" />
                        </Col>
                        <Col width="25%">
                            <ProgressMonitor strokeColor="#f16832" cPercentage="64" lPercentage="38" />
                        </Col>
                        <Col width="25%">
                            <ProgressMonitor strokeColor={properties.theme1} cPercentage="22" lPercentage="91" />
                        </Col>
                    </Row>

                    <Row>
                        <Col width="30%">
                            <BarIndicator />
                        </Col>
                        <Col width="30%">
                            <SimpleBarChart />
                        </Col>
                        <Col width="40%">
                            <CompositLineBar />
                        </Col>
                    </Row>

                    <Row>
                        <StackedCol width="40%">
                            <ProfileSummary />
                            <ProfileSummary />
                            <ProfileSummary />
                            <ProfileSummary />
                        </StackedCol>
                        <Col width="30%">
                            <ProgressIndicator />
                        </Col>
                        <Col width="30%">
                            <Monitor />
                        </Col>
                    </Row>
                </Content>
            </Mainwrapper>
        )
    }
}


export default Default