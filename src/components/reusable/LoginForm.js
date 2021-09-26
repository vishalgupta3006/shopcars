import Button from './Button';
import InputField from './InputField';
import './LoginForm.css';
export default function LoginForm() {
    const loginHandler = (e) => {
        e.preventDefault();
    }
    return (
        <div className="loginFormWrapper">
            <form>
                <InputField type="email" placeholder="Enter Email" label="Email" id="loginFormEmail" />
                <InputField type="password" placeholder="Enter Password" label="Password" id="loginFormPassword" />
                <Button type="submit" label="Login" className="btn-medium loginButton" onclickhandler={loginHandler} />
            </form>
        </div>
    );
}
