import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FormField from './FormField.js';
import Validator from './Validator.js';
import Button from './Button.js';
import './ReactForm.css';

class ReactForm extends Component{
  constructor(props){
    super(props);
    this.state = {fields: {...this.setInitialState(this.props.children)}, formError: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };
  //check if each child is a FormField
  isFormField(child){
    console.log(child);
    /*
    if(!(child instanceof FormField)){
      throw new Error("ReactForm only excepts FormField types");
    };
    */
  };
  handleChange(name, type, data){
    const validator = new Validator(data)
    if(validator.validate(type, data)){
      return this.setState((state) => {
        //update FormField state and set form error to false
        //if field is not updated to remove the error, error persists
        return {fields: {...state.fields, [name]: {...state.fields[name], 
          data: validator.getCleanedData(), error: validator.getError()}}, formError: false}
      });
    } else{
      return this.setState((state) => {
        
        //update FormField state and set form error to true
        return {fields: {...state.fields, [name]: {...state.fields[name], 
        error: validator.getError()}}, formError: true};
      })
    }
  };
  handleSubmit(e){
    e.preventDefault();
    if(this.state.formError){
      //do nothing, but errors will be shown in FormFields
      return;
    };
     //set key, value pair of {Formfield name: FormField value}
    let formData = {};
    for(const [name, info] of Object.entries(this.state.fields)){
      formData[name] = info.data;
    };
    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json;charset=utf-8;'
      },
      body: JSON.stringify(formData)
    };
    return fetch(this.props.endpoint, options);
  };
  setInitialState(children){
    const state = {...this.state};
    React.Children.forEach(children, child => {
      this.isFormField(child);
      //set FormField name to label if not given, label is required
      state[child.props.name || child.props.label] = {type: child.props.type, data: "", 
      error: "", label: child.props.label, style: (child.props.style)?
       (child.props.style): {}, tag: child.props.tag};
    });
    return state;
  };
  renderFields(){
    const fields = [];
    for(const [name, info] of Object.entries(this.state.fields)){
      let field = React.createElement(
        FormField,
        {
          ...info, //info object includes style attribute
          name, 
          key: name,
          handleChange: this.handleChange,
        }, 
      );
      fields.push(field);
    };
    return fields;
  };
  render(){
    console.log(this.state);
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit.bind(this)}>
          {this.renderFields()}
          {this.props.Button}
        </form>
      </div>
    );
  };
};

ReactForm.propTypes = {
    Button: Button,
    endpoint: PropTypes.string.isRequired,
};

ReactForm.defaultProps = {
    Button: <Button />,
};

export default ReactForm;
