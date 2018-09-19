import React, { Component } from 'react';
import NavbarItem from '../navbar_item/navbar_item';
import { Wrapper, Logo } from './navbar_styles';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as firebase from 'firebase';
import SmallLoader from '../small_loader/small_loader';
import GlobalActions from '../../redux/actions/global.actions';


const config = {
    apiKey: "AIzaSyBO0oNHKSTdWQwe---waYn3rG__S5JsBKk",
    authDomain: "cvcv-fe126.firebaseapp.com",
    databaseURL: "https://cvcv-fe126.firebaseio.com",
    projectId: "cvcv-fe126",
    storageBucket: "cvcv-fe126.appspot.com",
    messagingSenderId: "576547964299"
};
firebase.initializeApp(config);

class Navbar extends Component {

    state = {
        menu: [],
        loading: true
    }

    componentWillMount(){
        const rootRef = firebase.database().ref().child('data');
        const data = rootRef.child("menu");
        data.on('value', snap => {
            this.setState({menu: snap.val()}, ()=>{
                this.setState({ loading:false });
                if(window.localStorage.getItem("loading") === null){
                    setTimeout(() => {
                        this.props.hideMenuAction();
                        window.localStorage.setItem("loading", false);
                    }, 1000)
                }
                else{
                    this.props.hideMenuAction();
                }
            });
        });
    }

    render(){
        const { menu, loading } = this.state;
        const { hideMenu } = this.props;

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
});

const mapDispatchToProps = dispatch => ({
    loadingAction: () => { dispatch(GlobalActions.loadingAction()) },
    hideMenuAction: () => { dispatch(GlobalActions.hideMenuAction()) }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
