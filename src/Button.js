import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const defaultStyle = {
    backgroundColor: "lime",
    width: "80px",
    paddingTop: "5px",
    paddingBottom: "5px",
    color: "black",
    borderStyle: "none",
    borderRadius: "5px",
};

class Button extends Component{
    render(){
        return (
            <div className="button-container">
                <input className="button" type="submit" style={this.props.style} value={this.props.action} />
            </div>
        )
    }
};

Button.propTypes = {
    style: PropTypes.object,
    action: PropTypes.string,
};

Button.defaultProps = {
    style: defaultStyle,
    action: "Submit",
};

export default Button;