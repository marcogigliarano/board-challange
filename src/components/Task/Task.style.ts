import styled, { css } from 'styled-components'

export const MainContainer = styled.div`
    background: #fcfcfc;
    border: 1px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 16px;
    margin-top: 24px;
    flex: 1;
    display: flex;
`
interface TitleProps {
    readonly background: string;
    readonly disabled: boolean;
}
export const Action= styled.div<TitleProps>`
    background-color: ${props => props.background};
    color: white;
    box-shadow: rgb(0 0 0 / 25%) 0px 4px 4px;
    border-radius: 8px;
    padding: 8px;
    cursor: pointer;
    ${props => props.disabled && css `
        pointer-events: none;
        opacity: 0.5;
    `};
`

export const Title = styled.div`
    flex: 1;
    margi-left: 8px;
    margin-right: 8px;
    text-align: center;
    align-self: center;
`