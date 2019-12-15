import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container,NavbarBrand } from 'reactstrap';
import './styles/Footer.css';
class Footer extends Component {
    state = {  }
    render() { 
        return (  
            <div className="bottom">  
                    <Navbar>
                        <Container>
                            <NavbarBrand>Plutus</NavbarBrand>
                            <NavbarBrand>Contact us @ (212) 998-1212</NavbarBrand>
                            <NavbarBrand><a href="https://github.com/dnntrn/Plutus">Github</a></NavbarBrand>
                        </Container>
                    </Navbar>
            </div>

        );
    }
}
 
export default Footer;
