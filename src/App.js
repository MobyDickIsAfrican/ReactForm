import React, {Component} from 'react';
import './App.css';
import FormField from './FormField.js';
import ReactForm from './ReactForm.js';


class App extends Component{
  render(){
    return (
      <div className="App"> 
        <div className="form-wrapper">
          <ReactForm endpoint="http://localhost.com">
            <FormField tag="input" type="text" label="Name" style={{width: "500px",
          borderRadius: "4px", borderColor: "darkblue"}}/>
          <FormField tag="textarea" type="text" label="Text" style={{width: "500px",
          borderRadius: "4px", borderColor: "darkblue"}}/>
          </ReactForm>
        </div>
      </div>
    )
  }
};

export default App;