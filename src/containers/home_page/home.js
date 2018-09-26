import React, { Component } from 'react';
import { connect } from "react-redux";
import Wrapper from '../../components/basic/styles';
import Header from '../../components/HeaderComponent/header';
import { HomeWrapper, Text, Title } from './home_styles';
import GlobalAction from '../../redux/actions/global.action';
import SmallLoader from '../../components/small_loader/small_loader';

class Home extends Component {

    componentWillMount(){
        if(window.localStorage.getItem("loading") === null){
            setTimeout(() => {
                this.props.hideMenuAction();
                window.localStorage.setItem("loading", false);
            }, 1500)
        }
        else{
            this.props.hideMenuAction();
        }
    }

    componentDidMount(){
        console.log(this.props.data);

    }

    render(){
        const { hideMenu, data } = this.props;

        if(data.length < 1){
            return(
                <SmallLoader/>
            )
        }

        return(
            console.log(data.homepage),

            <Wrapper>
                <HomeWrapper loading={hideMenu}>
                    <Header title="About Me" />
                    <Title>{data.homepage[0].title}</Title>
                    <Text>{data.homepage[0].text}</Text>
                </HomeWrapper>
            </Wrapper>
        )
    }
}


const mapStateToProps = state => ({
    hideMenu: state.globalReducer.hideMenu,
    data: state.dataReducer

});

const mapDispatchToProps = dispatch => ({
    hideMenuAction: () => { dispatch(GlobalAction.hideMenuAction()) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
