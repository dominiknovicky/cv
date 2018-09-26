import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width:100%;
    height: 100vh;
    display: flex;
    position: relative;
    transition: all 0.2s linear;
    flex-direction: column;
    justify-content: center;
    right: ${({ loading }) => (loading === false ? "0%" : "-100%")};
`;

export const Title = styled.div`
    max-width: 360px;
    display:flex;
    margin: 0 auto;
    text-align:center;
    font-weight: bold;
    font-size: 1.3em;
    padding: 25px 0 10px;
`;

export const Text = styled.div`
    max-width: 420px;
    margin: 0 auto;
    display: flex;
    text-align:center;
    line-height: 27px;
    padding: 0 30px;
`;