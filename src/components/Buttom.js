import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    background-color: yellow;
    color: blue;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: red;
    }
`;

const Button = ({ children, ...props }) => {
    return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;