import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserSearch from './UserSearch';

class App extends React.Component {
  

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>

        
        <div id="myModal" className="modal fade" role="dialog">
          <div className="modal-dialog">

            
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Add Note</h4>
              </div>
              <div className="modal-body">
                <h5 className="modal-title">New Note </h5>
     

              < UserSearch/>

              </div>
              <div className="modal-footer">
                Import: <input type="checkbox" id="myCheck"></input>
                <button type="button" className="btn btn-default" data-dismiss="modal">Add Note</button>
                <button type="button" className="btn btn-default" data-dismiss="modal">cancelar</button>

              </div>
            </div>

          </div>
        </div>

      </div>





      
    );
  }
}

export default App;
