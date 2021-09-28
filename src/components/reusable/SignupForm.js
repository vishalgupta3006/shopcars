import Button from './form fields/Button';
import InputField from './form fields/InputField';
import './SignupForm.css';
export default function SignupForm () {
    const signupAction = (e) =>{
        e.preventDefault();
        console.log("From the sign up form ");
    }
    return (
        <div className="SignupFormWrapper">
            <form className="signupForm">
                <InputField type="text" placeholder="Enter First Name" label = "First Name" id="signupFormFirstName"/>    
                <InputField type="text" placeholder="Enter Last Name" label = "Last Name" id="signupFormLastName"/>
                <InputField type="email" placeholder="Enter Email" label = "Email"  id="signupFormEmail"/>
                <InputField type="tel" placeholder="Enter Mobile Number" label = "Mobile Number" id="signupFormPhone"/>
                <InputField type="password" placeholder="Enter Password" label = "Password" id="signupFormPassword"/>
                <InputField type="password" placeholder="Confirm Password" label = "Confirm Password" id="signupFormConfirmPassword"/>
                <Button type="submit" label="Create Account" className="defaults" onclickhandler={signupAction}/>
            </form>
        </div>
    );
}
