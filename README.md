ReactForm is a ReactJS component that encapsulates form functionality into your componenent. Validation is handled by a custom Validator class, but the idea is to enable you to pass custom validator functions to extend/replace the  default validator logic - only text, numbers and emails are validated. To create a ReactForm use:

import FormField from './FormField.js';
import ReactForm from './ReactForm.js';

div className="your-container">
    <ReactForm endpoint="http://localhost.com">
      <FormField tag="input" type="text" label="Name" style={{width: "500px",
        borderRadius: "4px", borderColor: "darkblue"}}/>
      <FormField tag="input" type="tel" label="Cell Number" style={{width: "200px",
        borderRadius: "4px", borderColor: "darkblue"}}/>
      <FormField tag="input" type="email" label="Email" style={{width: "100px",
        borderRadius: "4px", borderColor: "darkblue"}}/>
    </ReactForm>
</div>

The style of the form fields can be modified by passing a style prop to the FormField. The ReactForm's dimensions are percentages to allow for responsiveness, but you are free to change the dimensions via the style prop. 

The package comes with a builtin button componenent for submission, but you customise the button styles by passing the button as a prop to the ReactForm.
i.e. Button={<Button style={mystyles} action="value of text to be displayed on the button" />}
