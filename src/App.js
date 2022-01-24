import React from 'react';
import './App.css';
import { Footer, Hero } from './component';
// import All from './template/All/All';
import All from './template/completeTemplate/template';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       enter: 'Edaran'
    };
  };
  
  changeHandler = (d) => {
      this.setState({
        enter: d
      })
  }


  render() {
    return (
      <>
      <Hero changeHandler={this.changeHandler} />
      <All  style={{marginTop: '-200px'}} enter={this.state.enter} />
      <Footer/>
      </>
      );
    }
  }