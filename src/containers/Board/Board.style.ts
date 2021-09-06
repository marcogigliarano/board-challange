import styled from 'styled-components'

export const Container = styled.div`
    width: calc(100vw - 50px);
    margin: 0 auto;
    maxHeight: 100%;
    background: #fcfcfc;
    border: 1px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    padding: 24px;
`
export const Content = styled.div`
    display: flex;
    justifyContent: space-between;
`

export const ListContainer = styled.div`
    background: #fcfcfc;
    border: 1px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 24px;
    flex: 1;

    &:not(:first-child) {
        margin-left: 16px;
    }
    > h2 {
        text-align: center;
        margin-bottom: 48px;
    }
`

export const ActionsContainer = styled.div`
    margin: 24px 0;
`