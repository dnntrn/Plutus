import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './styles/Footer.css';
class Footer extends Component {
    state = {  }
    render() {
        return (
            <div className="bottom">
              <Navbar>
                <Navbar.Brand id="appName">Plutus</Navbar.Brand>
                <Navbar.Text><a href="https://github.com/dnntrn/Plutus">Contact Us</a></Navbar.Text>
              </Navbar>
            </div>

        );
    }
}

export default Footer;
