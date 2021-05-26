// class for handling validation of form data
class Validator{
    costructor(data){
        this.data = data
        this.cleanedData = null; // is set to string by validateText() and validateEmail
        this.error = null;
    };
    validate(type){
        if(type == "text"){
            return this.validateText(type);
        } else if(type === "tel"){
            return this.validateNumber(type);
        } else if(type === "email"){
            return this.validateEmail(type);
        }
    };
    getCleanedData(){
        if(!this.cleanedData){
            throw new Error("data has not been cleaned or there are no errors");
        }
    };
    getError(){
        return this.error;
    };
    validateText(text){
        // might want to add some more cases to have more specialised error messages
        if(text === "text"){
            const newText = text.replace(/[.*+?^${}()\[\]\\]/g, '\\$&');
            this.cleanedData = newText;
            return true
        };
        this.error = "invalid text";
        return false;
    };
    //this is a cell number, not a natural and/or real number
    //you might want to use a 3rd party library for this
    validateNumber(number){
        const numberRegX = /^\+(?:[0-9] ?){6,14}[0-9]$/;
        if(numberRegX.test(number)){
            this.cleanedData = number;
            return true;
        };
        this.error = number;
        return false;
    };
    //you might want to use a 3rd party library for this or send verification email
    validateEmail(email){
        const emailRegX = /\S+@\S+\.\S+/i
        if(emailRegX.test(email)){
            this.cleanedData = email;
            return true;
        };
        this.error = "invalid email"
        return false;
    };
};

export default Validator;