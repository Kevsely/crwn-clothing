import styled, { css } from "styled-components";


const googleSignedInStyles = css`
    &.google-sign-in {
    background-color: #4285f4;
    color: white;

        &:hover {
            background-color: #357ae8;
            border: none;
        }
    }
`

const normalButtonStyles = css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`

const invertedButtonStyles = css` 
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`

const handleProps = (props) => {
    if (props.isGoogleSignIn)
        return {googleSignedInStyles}
    
    return props.inverted ? {normalButtonStyles} : {invertedButtonStyles}
}

export const CustomButtonStyled = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: "Asap Condensed", sans-serif;
    font-weight: bolder;
    cursor: pointer;

    ${handleProps}
`;