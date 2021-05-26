import React, {Component} from 'react';
import PropTypes from 'prop-types';
import allowedTags from './allowedTags.js';
import allowedTypes from './allowedTypes';
import './FormField.css';

class FormField extends Component{
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange(e){
        return this.props.handleChange(this.props.name, this.props.type, e.target.value);
    }
    render(){
        console.log(this.props);
        return (
            <div className="field-container">
                <label className="field-label">
                    {this.props.label}
                    {React.createElement(
                        this.props.tag,
                        {
                            ...this.props, //get all props from parent
                            className: "input-tag",
                            value: this.props.data,
                            onChange: this.onChange,
                            type: this.props.type,
                        }
                    )}
                </label>
            </div>
        )
    }
};

FormField.propTypes = {
    tag: PropTypes.oneOf(allowedTags).isRequired,
    type: PropTypes.oneOf(allowedTypes).isRequired,
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string.isRequired,
    handleChange: PropTypes.func,
    style: PropTypes.object,
    error: PropTypes.string.isRequired,
    
}

FormField.defaultProps = {
    error: "",
}
export default FormField;