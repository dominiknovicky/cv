import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Navbar from '../../components/navbar/navbar';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHSquare, faUserCircle, faEnvelopeSquare, faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import Home from '../home_page/home';
import About from '../about_page/about';
import Download from '../download_page/download';
import Contact from '../contact_page/contact';
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
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/download" component={Download} />
                    </Switch>
                </Wrapper>
            </div>
        )
    }
}

export default cvPage;