import React from 'react';
import { Wrapper, Text } from './header_styles';

const Header = ({ title }) => (
    <Wrapper>
        <Text>{title}</Text>
    </Wrapper>
)

export default Header;