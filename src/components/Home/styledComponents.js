import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
`

export const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`

export const ErrorViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`

export const ErrorViewImage = styled.img`
  height: 300px;
`
export const ErrorViewHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
`

export const ErrorViewPara = styled.p`
  font-family: Roboto;
`

export const RetryButton = styled.button`
  background-color: #4656a1;
  border: 0px none;
  border-radius: 5px;
  padding: 5px;
`
