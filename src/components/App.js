import '../styles/App.css';
import ChessBoard from './ChessBoard';
import React, { Component } from 'react';
import Nqueens from "../utility/Nqueens";

class App extends Component {
  constructor(props) {

    super(props);
    this.state = {
      n: '',
      index: -1,
      solutions: null,
      isNum: false,
      validationMsg: ''
    };

  }

  solve = () => {

    const n = parseInt(this.state.n);

    const nqueens = new Nqueens(n);

    this.setState({
      solutions: nqueens.solve(0),
      index: 0
    });

  }


  solveOnEnter = (e) => {
    if (e.keyCode === 13 && this.state.n !== '' && this.state.isNum) {
      this.solve();
    }
  }


  prev = (e) => {

    this.setState((prevState) => ({
      index: prevState.index - 1
    }));

  }

  next = (e) => {
    this.setState((prevState) => ({
      index: prevState.index + 1
    }));
  }


  setN = (e) => {
    const n = e.target.value;

    const nValid = this.validateN(n);

    this.setState({
      n: n,
      isNum: nValid.isNum,
      validationMsg: nValid.validationMsg
    });
  }

  validateN = (s) => {

    let isNum = true;
    let validationMsg = '';

    if (/^\-[\d]+$/gi.test(s)) {
      isNum = false;
      validationMsg = "Negative number's are not allowed";
    } else if (/^\-[\d]+\.[\d]+$/gi.test(s)) {
      isNum = false;
      validationMsg = "Negative decimal number's are not allowed";
    } else if (/^\.[\d]+$/gi.test(s) || /^[\d]+\.[\d]+$/gi.test(s)) {
      isNum = false;
      validationMsg = "Decimal number's are not allowed";
    } else if (/[^0-9]+/gi.test(s)) {
      isNum = false;
      validationMsg = "Only number's are allowed";
    } else if (parseInt(s) < 4) {
      isNum = false;
      validationMsg = "You can only calculate solution's for more than 3 queens";
    }

    return {
      isNum: isNum,
      validationMsg: validationMsg
    };
  }

  render() {

    return (
      <div className="container">

        <div className="row">
          <div className="col-md-6">

            {
              this.state.n !== '' && 
              this.state.solutions && 
              this.state.solutions[0].length === parseInt(this.state.n) && 
              this.state.isNum  ?
              <div className="header">
                <h1>No. of solutions for {this.state.n} queens is {this.state.solutions.length}</h1>
                <h2 className="solution-count">Solution #{this.state.index + 1}</h2>
              </div>
              :
              ''
            }
            
            <ChessBoard solutions={this.state.solutions} index={this.state.index} n={this.state.n} isNum={this.state.isNum} />
          </div>
          <div className="col-md-6">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="input-group has-validation">
                  <input 
                    type="text" 
                    placeholder="N" 
                    className="form-control" 
                    value={this.state.n} 
                    onChange={this.setN} 
                    onKeyUp={this.solveOnEnter} 
                  />
                  <div className="invalid-feedback" style={{display: !this.state.isNum ? 'block' : 'none'}}>
                    {this.state.validationMsg}
                  </div>
              </div>
                
              <input 
                type="button" 
                value="Solve" 
                className="btn btn-primary" 
                disabled={
                  this.state.n === '' ||
                  (this.state.n !== '' && !this.state.isNum)
                } 
                onClick={this.solve} 
              />
              
              <input
                type="button"
                value="Prev"
                className="btn btn-primary"
                disabled={
                  this.state.n === '' ||
                  (this.state.n !== '' && !this.state.isNum) ||
                  (this.state.solutions && this.state.solutions[0].length !== parseInt(this.state.n)) ||
                  this.state.index - 1 < 0
                }
                onClick={this.prev}
              />
              
              <input
                type="button"
                value="Next"
                className="btn btn-primary"
                disabled={
                  this.state.n === '' ||
                  (this.state.n !== '' && !this.state.isNum) ||
                  (this.state.solutions && this.state.solutions[0].length !== parseInt(this.state.n)) ||
                  this.state.index < 0 ||
                  (this.state.solutions && this.state.index + 1 >= this.state.solutions.length)
                } onClick={this.next}
              />
            </form>
          </div>
          </div>


        </div>
    );

  }
}


export default App;
