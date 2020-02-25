import React, { Component } from 'react';
import styled from 'styled-components';


const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`
const SW1 = styled.div`
  width: 60%;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin: 24px 24px 24px 0px;
  @media (max-width: 900px) {
   width: 100%;
  }
`
const SW1A = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SW1B = styled.div`
  width: 40%;
  height: 100%;
  display : flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-right: 10px;
`

const SW1BT = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  font-size: 12px;
`
const Button = styled.div`
  width: 10px;
  height: 10px;
  background-color: #00bfe6;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;

`
const ButtonI = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: white;
`

const SW2 = styled.div`
  width: 40%;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin: 24px 0px 24px 0px;
  @media (max-width: 900px) {
   width: 100%;
   margin-bottom: 24px;
  }
`
// const SW1 = styled.div``
// const SW1 = styled.div``

class Layout2B extends Component {
  render() {
    return (
      <MainWrapper>
        <SW1>
          <SW1A>
            Graph
          </SW1A>
          <SW1B>
            <SW1BT>
              <Button>
                <ButtonI></ButtonI>
              </Button>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            </SW1BT>
            <SW1BT>
              <Button>
                <ButtonI></ButtonI>
              </Button>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            </SW1BT>
            <SW1BT>
              <Button>
                <ButtonI></ButtonI>
              </Button>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            </SW1BT>
          </SW1B>
        </SW1>
        <SW2>

        </SW2>

      </MainWrapper>
    )
  }
}

export default Layout2B