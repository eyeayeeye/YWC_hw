import React, { Component } from 'react';
import './App.css';
import { Table,Container,Row,Col,Badge,ButtonGroup,Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink,Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import logo from './logo.png';
import axios from 'axios';

class Head extends Component{
  render(){
    return(
      <div>
      <link href="https://fonts.googleapis.com/css?family=Barlow|Gloria+Hallelujah|Inconsolata|Indie+Flower|Josefin+Sans|Kanit:200,300,400|Ubuntu" rel="stylesheet"/>
      
      </div>
      )
  }
}

class GetData extends Component{
    render(){
       var returnVal=[];
       this.props.alldata.sort((a, b) => a.firstName.localeCompare(b.firstName))
       let pattern = this.props.search;
       let re = new RegExp(pattern,"g");
       this.props.alldata.forEach((obj)=> 
          {
            let concat = obj.firstName+" "+obj.lastName;
           
            if(obj.major === this.props.branch && re.test(concat) === true )
            
              returnVal.push(<tr className="alldata"><td> {obj.interviewRef}</td> <td>{obj.firstName}</td>  <td> {obj.lastName}</td> </tr>);
            
           });
            
      return(
        <Container className="textalign">
          <p className="data_topic"> Web {this.props.branch} </p>
          <Table  >
            <thead>
              <tr className="alldata data_head">
                <th>InterviewRef</th>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody> 
              {returnVal}
            </tbody>
          </Table>
        </Container>
        )
    }
}




class App extends Component {

  constructor(props){
    super(props);
    this.state={info:[],result:'content',search:''};
    this.triggerContent = this.triggerContent.bind(this);
    this.triggerDesign = this.triggerDesign.bind(this);
    this.triggerMarketing = this.triggerMarketing.bind(this);
    this.triggerProgramming = this.triggerProgramming.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount(){
      this.getdata().then(result => this.setState({
      info : result
    }));
  }

  getdata(){
    let data = axios.get("https://ywc15.ywc.in.th/api/interview")
          .then((result)=>{
            return result.data;
          });
    return data;
  }

  triggerContent(){
    this.setState({result : 'content'});
  }

  triggerDesign(){
    this.setState({
      result : 'design'
    });
  }

 triggerMarketing(){
    this.setState({
      result : 'marketing'
    });
  }

   triggerProgramming(){
    this.setState({
      result : 'programming'
    });
  }
  search(event){
    let str = event.target.value;
    this.setState({
      search:str
    });
  }
  render() {
    var data = this.state.info;


    return (
      <Container className="eye">
        
        <Head />
        <Row>
          <img src={logo} className="logo" />
        </Row>
        <Row>
          <div className="topic">
            <Row>
            <Col lg="12" md="12" className="first_topic">
              <p > FINALLY! </p> 
            </Col>
            </Row>
            <Row>
            <Col lg="12" md="12" className="semi">
              <p  > Semi Final Round </p>
            </Col>
            </Row>
            <Row>
            <Col lg="12" md="12" className="second_topic">
              <p> ประกาศผลผู้ผ่านเข้ารอบสัมภาษณ์ของ YWC#15 </p>
            </Col>
            </Row>
          </div>
        </Row>
       
        <Row >
          <Container >
            <Row >
              <Col lg="2" md="2" className="smallmenu menu" onClick={this.triggerContent}>
                  Web Content
              </Col>
              <Col lg="2" md="2" className="smallmenu menu" onClick={this.triggerDesign}>
                  <p className="enter">Web</p> Design
              </Col>
              <Col lg="2" md="2" className="smallmenu menu" onClick={this.triggerMarketing}>
                  Web Marketing
              </Col>
              <Col lg="5" md="5" >
                <Row>
                  <Col lg="5" md="5" className="smallmenu menu" onClick={this.triggerProgramming}> 
                    <p className="enter">Web</p> Programming
                  </Col>
                  <Col lg="1" md="1">
                  </Col>
                  <Col lg="2" md="2" className="search">
                    <Form inline>
                        <Label > Search</Label>
                        <FormGroup>
                          <Input  placeholder="Enter your name" onChange={this.search}/>
                          
                        </FormGroup>
                    </Form>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Row>
        

        <Row className="marginTop">
          <Col lg="2">
          </Col>
          <Col lg="8">
            <Container >
              <GetData  alldata={data} branch={this.state.result} search={this.state.search}/>
            </Container>
          </Col>
          <Col lg="2">
          </Col>
        </Row>

      </Container>

    );
  }
}

export default App;
