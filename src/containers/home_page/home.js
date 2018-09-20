import React, { Component } from 'react';
import { connect } from "react-redux";
import Wrapper from '../../components/basic/styles';
import Header from '../../components/HeaderComponent/header';


class Home extends Component {
    render(){
        return(
            <Wrapper>
                <Header title="About" />
            </Wrapper>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.globalReducer.loading
});

export default connect(mapStateToProps)(Home);
