import styled from 'styled-components';

export const Wrapper = styled.div`
    @media (max-width: 600px) {
        width: 22%;
    }
    width: 20%;
    background: #fff;
    height: 100%;
    position: fixed;
    z-index: 100;
    top: 0;
    left: ${({ loading }) => (loading === false ? "0%" : "-25%")};
    overflow-x: initial;
    display: flex;
    flex-direction: column;
    transition: all 0.2s linear;
`;

export const Logo = styled.div`
    @media (max-width: 600px) {
        font-size: 2.5em;
    }
    width: 100%;
    height: ${({ menu }) => ("100"/menu)+"vh"};
    line-height: ${({ menu }) => ("100"/menu)+"vh"};
    text-align: center;
    font-size: 3.5em;
    padding: 2.5px;
    font-weight: bold;
    background: rgb(60,60,60);
    color: #fff;
    letter-spacing: -1px;
    transition: all 0.2s linear;
    font-family: 'Concert One', cursive;
`;