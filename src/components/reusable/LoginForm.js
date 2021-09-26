import InputField from './InputField';
import './LoginForm.css';
export default function LoginForm () {
    return (
        <div className="loginFormWrapper">
            <form>
                <InputField type="email" placeholder="Enter Email" label = "Email"  id="loginFormEmail"/>
                <InputField type="password" placeholder="Enter Password" label = "Password" id="loginFormPassword"/>
                <button className="loginButton" type="submit" onClick={(e) => e.preventDefault()}>Submit</button>
            </form>
        </div>
    );
}
