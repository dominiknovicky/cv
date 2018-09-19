import styled from 'styled-components';

export const Wrapper = styled.div`
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    transition: all .3s linear;
    z-index: 1000;
    display: flex;
    background-color: #d7d7d7;
    transition: all .1s linear;
`;

export const Loader = styled.img`
    margin: auto;
    max-width: 10%;
    transition: all .1s linear;
`;


