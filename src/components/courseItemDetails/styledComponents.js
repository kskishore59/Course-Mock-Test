import styled from 'styled-components'

export const ItemMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const ItemContainer = styled.div`
  border-radius: 10px;
  border: 0px none;
  height: 60vh;
  width: 70vw;
  display: flex;
  box-shadow: 1px 4px 4px #e8e8e8;
`

export const ItemImage = styled.img`
  height: 100%;
  margin-right: 20px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
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
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`
