import React from 'react';
import { Wrapper, Item, Icon, IconWrapper, StyledLink } from './item_styles';
import PropTypes from "prop-types";

const isActive = {
    backgroundColor: "#d7d7d7",
    color: "rgb(60,60,60)"
}

const NavbarItem = ({ title, icon, href, menu }) => (
    <StyledLink
        to={href}
        activeStyle={isActive}
    >
        <Wrapper menu={menu}>
            <IconWrapper>
                <Icon icon={icon}/>
            </IconWrapper>
            <Item>{title}</Item>
        </Wrapper>
    </StyledLink>
)

NavbarItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    menu: PropTypes.number.isRequired
};

export default NavbarItem;