import '../styles/App.css';
import ChessBoard from './ChessBoard';
import React, {Component} from 'react';

class App extends Component {
  constructor(props) {

    super(props);
    this.state = {};

  }

  render() {

    return (
      <div className="container">
  
        <div className="row">
          <div className="col-md-6">
  
            <ChessBoard />
          </div>
          <div className="col-md-6">
            <form>
              <input type="text" placeholder="N" className="form-control" />
              <input type="button" value="Solve" className="btn btn-primary" />
              <input type="button" value="Prev" className="btn btn-primary" />
              <input type="button" value="Next" className="btn btn-primary" />
            </form>
          </div>
        </div>
  
        
      </div>
    );

  }
}


export default App;
