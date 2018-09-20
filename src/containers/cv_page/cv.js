import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Navbar from '../../components/navbar/navbar';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHSquare, faUserCircle, faEnvelopeSquare, faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import Home from '../home_page/home';
import Wrapper from './styles';

library.add(faHSquare, faUserCircle, faEnvelopeSquare, faArrowAltCircleDown );

class cvPage extends Component {

    componentWillMount(){
        this.props.history.push("/home");
    }

    render(){
        return (
            <div>
                <Navbar/>
                <Wrapper>
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/about" component={Home} />
                        <Route path="/contact" component={Home} />
                        <Route path="/download" component={Home} />
                    </Switch>
                </Wrapper>
            </div>
        )
    }
}

export default cvPage;