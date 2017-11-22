import React, { Component } from 'react';
import './App.css';
import { Button,Container,Row,Col,Badge,ButtonGroup,Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink} from 'reactstrap';

class Head extends Component{
  render(){
    return(
      <div>
      <link href="https://fonts.googleapis.com/css?family=Barlow|Gloria+Hallelujah|Inconsolata|Indie+Flower|Josefin+Sans|Kanit|Ubuntu" rel="stylesheet"/>
      </div>
      )
  }
}



class App extends Component {
  

  render() {
    return (
      <Container className="eye">
        <Head />
        <Row>
          <div className="topic">
              <p className="first_topic"> FINALLY!</p> 
              <p className="second_topic"> ประกาศผลผู้ผ่านเข้ารอบสัมภาษณ์ของ YWC#15 </p>
          </div>
        </Row>
       
        <Row >
          <Container className= "menu">
            <Row >
              <Col lg="3" md="3" className="smallmenu borderlight">
                  Web Content
              </Col>
              <Col lg="3" md="3" className="smallmenu borderlight">
                  Web Design
              </Col>
              <Col lg="3" md="3" className="smallmenu borderlight">
                  Web Marketing
              </Col>
              <Col lg="3" md="3" className="smallmenu">
                  Web Programming
              </Col>
            </Row>
          </Container>
        </Row>
     
        <Row>
        
        </Row>

      </Container>

    );
  }
}

export default App;
