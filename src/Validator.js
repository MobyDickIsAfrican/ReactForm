// class for handling validation of form data
class Validator{
    costructor(data){
        this.data = data
        this.cleanedData = null; // is set to string by validateText() and validateEmail
        this.error = "";
    };
    validate(type, data){
        if(type == "text"){
            return this.validateText(data);
        } else if(type === "tel"){
            return this.validateNumber(data);
        } else if(type === "email"){
            return this.validateEmail(data);
        }
    };
    getCleanedData(){
        return this.cleanedData;
    };
    getError(){
        return this.error;
    };
    validateText(text){
        const newText = text.replace(/[.*+?^${}()\[\]\\]/g, '\\$&');
        this.cleanedData = newText;
        return true
    };
    //this is a cell number, not a natural and/or real number
    //you might want to use a 3rd party library for this
    validateNumber(number){
        console.log(number);
        const numberRegX = /^\d+$/;
        if(numberRegX.test(number)){
            this.cleanedData = number;
            return true;
        };
        this.error = "invalid number";
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
        //have to return true, because email can only be verified on submission, not onChange
        return true;
    };
};

export default Validator;