import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom'

export const Wrapper = styled.div`
    @media (max-width: 700px) {
        text-align: center;
        justify-content: center;
    }
    @media (max-width: 900px) {
        padding: 0 1em;
    }
    display: flex;
    align-items: center;
    height: ${({ menu }) => ("100"/menu)+"vh"};
    padding: 0 2em;
    transition: all .1s linear;
`;

export const IconWrapper = styled.div`
    @media (max-width: 700px) {
        width: auto;
    }
    width: 27.5px;
`;

export const Icon = styled(FontAwesomeIcon)`
    @media (max-width: 700px) {
        width: 100%;
        font-size: 2.2em;
    }
    font-size: 1.25em;
    display: flex;
`;

export const Item = styled.div`
    @media (max-width: 700px) {
        display: none;
    }
    display: flex;
    font-size: 1.15em;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: -1px;
`;

export const StyledLink = styled(NavLink)`
    &:hover{
        color:rgb(60,60,60);
        text-decoration: none;
    }
    &:focus{
        color:rgb(60,60,60);
        text-decoration: none;
        outline: 0;
    }
    color: darkGray;
    transition: all .1s linear;
    border-bottom: 1px solid #d7d7d7;
`;