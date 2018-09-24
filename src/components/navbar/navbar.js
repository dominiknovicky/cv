import React, { Component } from 'react';
import NavbarItem from '../navbar_item/navbar_item';
import { Wrapper, Logo } from './navbar_styles';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import SmallLoader from '../small_loader/small_loader';
import GlobalAction from '../../redux/actions/global.action';
import MenuAction from '../../redux/actions/menu.action'

class Navbar extends Component {

    state = {
        menu: []
    }

    componentWillMount(){
        this.props.fetchData();
        if(window.localStorage.getItem("loading") === null){
            setTimeout(() => {
                this.props.hideMenuAction();
                window.localStorage.setItem("loading", false);
            }, 2000)
        }
        else{
            this.props.hideMenuAction();
        }
    }

    render(){
        const { hideMenu, loading, menu } = this.props;

        if(loading){
            return(
                <SmallLoader/>
            )
        }

        return(
            <Wrapper loading={hideMenu}>
                <Logo menu={menu.length+1}>DN</Logo>
                {menu.map(item => (
                    <NavbarItem
                        title={item.name}
                        key={item.id}
                        href={"/"+item.name}
                        icon={item.icon}
                        menu={menu.length+1}
                    />
                ))}
            </Wrapper>
        )
    }
}

const mapStateToProps = state => ({
    hideMenu: state.globalReducer.hideMenu,
    loading: state.globalReducer.loading,
    menu: state.menuReducer
});

const mapDispatchToProps = dispatch => ({
    loadingAction: () => { dispatch(GlobalAction.loadingAction()) },
    hideMenuAction: () => { dispatch(GlobalAction.hideMenuAction()) },
    fetchData: () => { dispatch(MenuAction.fetchData()) }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
