import '../styles/App.css';
import ChessBoard from './ChessBoard';
import React, {Component} from 'react';
import Nqueens from "../utility/Nqueens";

class App extends Component {
  constructor(props) {

    super(props);
    this.state = {
      n: '',
      index: -1,
      solutions: null
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


  validateN = (e) => {
    
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
              <input type="text" placeholder="N" className="form-control" value={this.state.n} onChange={(e) => this.setState({n: e.target.value})} />
              <input type="button" value="Solve" className="btn btn-primary" disabled={this.state.n === ''} onClick={this.solve} />
              <input 
                type="button" 
                value="Prev" 
                className="btn btn-primary" 
                disabled={
                  this.state.n === '' || 
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
