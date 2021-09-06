import styled from 'styled-components'

export const Container = styled.div`
    border: 1px solid;
    display: flex;
    border-radius: 8px;
    overflow: hidden;
    width: fit-content;

    > input, button {
        border: none;
        padding: 4px 8px;
    }

    > button {
        cursor: pointer;
    }
`