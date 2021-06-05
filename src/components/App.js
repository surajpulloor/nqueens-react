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

  solve = (e) => {

    const n = parseInt(this.state.n);

    const nqueens = new Nqueens(n);

    this.setState({
      solutions: nqueens.solve(0),
      index: 0
    });

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

    if (/^[^\d]+$/gi.test(s)) {
      isNum = false;
      validationMsg = "Only number's are allowed";
    } else if (/^\-[\d]+$/gi.test(s)) {
      isNum = false;
      validationMsg = "Negative number's are not allowed";
    } else if (/^\-[\d]+\.[\d]+$/gi.test(s)) {
      isNum = false;
      validationMsg = "Negative decimal number's are not allowed";
    } else if (/^\.[\d]+$/gi.test(s) || /^[\d]+\.[\d]+$/gi.test(s)) {
      isNum = false;
      validationMsg = "Decimal number's are not allowed";
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

            <ChessBoard solutions={this.state.solutions} index={this.state.index} n={this.state.n} />
          </div>
          <div className="col-md-6">
            <form>
              <div className="input-group has-validation">
                  <input type="text" placeholder="N" className="form-control" value={this.state.n} onChange={this.setN} />
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
